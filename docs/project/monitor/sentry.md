# 解决方案Sentry
很多中小团队，希望集成页面监控，但受限于资源等条件，无法自研监控系统。这时候就需要一个现成的解决方案。这里推荐[Sentry](https://sentry.io/welcome/)

Sentry 是一个基于 Django 构建的现代化的实时事件日志监控、记录和聚合平台，主要用于如何快速的发现故障。支持几乎所有主流开发语言和平台，并提供了现代化 UI, 它专门用于监视错误和提取执行适当的事后操作所需的所有信息，而无需使用标准用户反馈循环的任何麻烦。
## 安装
Sentry 提供了商用的Sass服务，可以直接在官网使用以及开源的版本，可以自行私有化部署。 

私有化部署可以通过Python安装和Docker安装两种方式。个人强烈推荐使用Docker进行安装，以免还需要去研究各种配套设置的安装配置，如Kafka、Redis等。

### 前期准备
- Python3
- Docker 19.03.6+
- Compose 1.28.0+
- 4 CPU Cores
- 8 GB RAM
- 20 GB 磁盘空间

### 安装 Sentry
1. 获取git仓库
```shell
git clone https://github.com/getsentry/self-hosted.git
```
2. 执行脚本
```shell
cd self-hosted
sh ./install.sh
```
安装过程有些慢，在安装过程中，系统会提示是否要创建用户帐户，按照提示输入即可。

3. 设置基本配置
Sentry的安装向导会提示你设置一些基本的配置选项。具体配置项可参考[官网](https://develop.sentry.dev/config/)

### 启动
等安装完成后，使用docker-compose 启动服务
```
docker-compose up -d
```
浏览器内访问localhost:9000，登陆安装时创建的用户账号，就可以访问sentry了

![登陆](@assets/sentry/login.png)


## 接入
正常启动Sentry后，我们就可以为自己的项目创建一个project，先选择语言或者框架（以Vue为例）
![创建项目](@assets/sentry/select.png)

选择Vue项目，并且点击`Create Project`按钮

按照示例代码，在自己的项目中接入sdk，并调用
![Vue SDK](@assets/sentry/setp1.png)
![Vue SDK](@assets/sentry/setp2.png)
![Vue SDK](@assets/sentry/setp3.png)

更多语言或者框架的接入方式，可以参考[接入方法](https://docs.sentry.io/)

## 解析错误
当我们尝试在生产环境手动抛出错误，并在Sentry 平台查看
```vue
<div
  className={style['hit']}
  onClick={() => {
    throw Error('报错啦=====这里')
  }}>
  点击报错
</div>
```
我们会发现，在Issues中，可以找到刚抛出的错误，但并不能准确的找到源代码的错误位置，只有编译后代码的错误位置。
![error](@assets/sentry/error.png)
这是因为我们在生产环境运行的是编译过后的代码，本身报错堆栈就不是源代码的堆栈，如果想查看源代码的堆栈报错，我们可以将sourceMap上传到Sentry，借助sourceMap来定位源码。

1. 首先安装[@sentry/webpack-plugin](https://www.npmjs.com/package/@sentry/webpack-plugin)这个包
```shell
npm i @sentry/webpack-plugin
```
2. 在webpack中使用插件
```js
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
{
  // 一般线上选择hidden-source-map模式 测试环境选用source-map
  devtool: 'source-map',
  // 将 Webpack 插件设置为最后运行的插件  否则插件收到的 source maps 可能不是最终的
  plugins: [
    new SentryWebpackPlugin({
      include: path.resolve(__dirname, '../build/static/js/'), //需要上传到sentry服务器的文件，只需上传.map文件即可
      ignore: ['node_modules', 'webpack.config.js'],//忽略文件夹或文件不要被检测
      configFile: '../.sentryclirc',//用来替代第二步的.sentryclirc文件 需要有对应的文件 默认不配置即可
      urlPrefix: '~/static/js/',//自己项目中访问.map静态资源的文件夹的地址
    })
  ]
}
```
3. 在项目根目录新建.sentryclirc文件，进行sentry项目地址等相关配置
```
[defaults]
project=项目名称
org=组织settings -> settings/organization-slug
url=sentry地址

[auth]
token=sentry的Auth Token，settings -> account -> api -> auth-tokens
```
以上配置完成后，sentry平台内部会做map文件和压缩js文件的关联，一般线上环境我们需要将.map文件删除，防止源代码暴漏，所以在构建之后需要手动命令删除rimraf ./build/*.map（根据项目生成的.map文件目录动态调整命令）

```
 "prod": "dotenv -e ./env/.prod npm run build && rimraf ./build/*.map",
```

4. 以上配置完成后，我们再回到sentry中，查看报错的问题

![error-source](@assets/sentry/error-source.png)
