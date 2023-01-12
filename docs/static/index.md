# 基本规范
静态资源包含但不局限于我们日常使用的图片、视频、音频、龙骨动画等相关资源

## 文件命名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**下划线**分隔。

```
banner_sina.gif
menu_abouts.gif
menutitle_news.gif
logo_police.gif
logo_national.gif
pic_people.jpg
pic_TV.mp4
```
建议使用一下顺序命名：

> 业务（可选） +（mod_）功能类别（必选）+ 模块名称（可选） + 精度（可选）

- 业务：
  - pp_：拍拍
  - wx_：微信
  - sq_：手Q
  - jd_：京东商城
  - …
  
- 功能类别：
  - mod_：是否公共，可选
  - icon：模块类固化的图标
  - logo：LOGO类
  - spr：单页面各种元素合并集合
  - btn：按钮
  - bg：可平铺或者大背景
  - …

- 模块名称：
  - goodslist：商品列表
  - goodsinfo：商品信息
  - useravatar：用户头像
  - …

- 精度：
  - 普清：@1x
  - Retina：@2x | @3x
  - …
```
公共模块：
wx_mod_btn_goodlist@2x.png
wx_mod_btn_goodlist.png
mod_btn_goodlist.png 

非公共模块：
wx_btn_goodlist@2x.png
wx_btn_goodlist.png
btn_goodlist.png
```

## 文件路径

项目中使用的资源应根据类型进行统一分类存储

- 图片文件放置在`images`文件下
- 字体文件放置在`font`文件夹下
- video文件防止`video`文件夹下
- flash文件放置在`swf`文件夹下


## 格式要求
项目内所用格式应尽可能覆盖所有浏览器，如无法支持，应采取`优雅降级`方式

### 图片格式
常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP，根据图片格式的特性和场景需要选取适合的图片格式。

::: tip 强烈建议
  上线的图片都应该经过压缩处理，压缩后的图片不应该出现肉眼可感知的失真区域。
  推荐压缩网站[tinypng](https://tinypng.com/)
:::

#### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大

- 优先考虑 JPEG 格式，条件允许的话优先考虑 WebP 格式
- 尽量不使用PNG格式，PNG8 色位太低，PNG24 压缩率低，文件体积大

#### 背景图

背景图多为颜色比较简单、文件体积不大、起修饰作用的图片

- PNG 与 GIF 格式，优先考虑使用 PNG 格式,PNG格式允许更多的颜色并提供更好的压缩率
- 图像颜色比较简单的，如纯色块线条，优先考虑使用 PNG8 格式，避免不使用 JPEG 格式
- 图像颜色丰富而且图片文件不太大的（40KB 以下）或有半透明效果的优先考虑 PNG24 格式
- 图像颜色丰富而且文件比较大的（40KB - 200KB）优先考虑 JPEG 格式
- 条件允许的，优先考虑 WebP 代替 PNG 和 JPEG 格式

::: tip 建议
  针对图标，条件允许的，可使用svg格式。否则使用font格式
:::

### 多媒体格式
当在现代浏览器中使用 audio 以及 video 标签来播放音频、视频时，应当注意格式

音频应尽可能覆盖到如下格式：

MP3/WAV/Ogg

视频应尽可能覆盖到如下格式：

MP4/WebM/Ogg
> 在支持 HTML5 的浏览器中优先使用 audio 和 video 标签来定义音视频元素



