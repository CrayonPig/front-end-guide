# 源码构建

基于 NPM 托管的项目都有一个 package.json 文件，该文件是对项目的描述，我们一般会配置 `script` 字段作为NPM的执行脚本，Vue2源码的构建脚本如下：

```json
{
  "script": {
    "build": "node scripts/build.js",
    "build:ssr": "npm run build -- web-runtime-cjs,web-server-renderer",
    "build:weex": "npm run build -- weex"
  }
}
```

我们可以发现，跟 `build` 相关的命令共有三条，后面两条都是在在第一条的基础上，增加了一些额外参数。

当我们执行 `npm run build` 时，实际上就是在执行 `node scripts/build.js`, 我们找到 `scripts/build.js` 文件，看他是如何构建的。

## 构建配置 

```js
// 没有dist文件夹则创建
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}

// 获取所有预设的构建模式
let builds = require('./config').getAllBuilds()

// 根据运行中的额外参数筛选需要构建的模式
if (process.argv[2]) {
  const filters = process.argv[2].split(',')
  builds = builds.filter(b => {
    return filters.some(f => b.output.file.indexOf(f) > -1 || b._name.indexOf(f) > -1)
  })
} else {
  // 默认情况下不打包 weex 相关的构建模式
  builds = builds.filter(b => {
    return b.output.file.indexOf('weex') === -1
  })
}

```

前面这段代码较为简单

1. 先判断根目录有没有 `dist` 文件夹，如果没有则创建该文件夹。
2. 从配置文件中获取所有的构建模式
3. 如果有构建命令中有额外参数，则根据运行中的额外参数筛选需要构建的模式（此处也对应 `script` 中后两个有额外参数的构建命令）
4. 如果没有额外参数，则默认构建除 `weex` 相关外的所有模式

接下来我们看下第二步的配置文件，在 `scripts/config.js` 中

```js
const builds = {
  // Runtime only (CommonJS). Used by bundlers e.g. Webpack & Browserify
  'web-runtime-cjs': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.common.js'),
    format: 'cjs',
    banner
  },
  // ...
}


exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
```

对于单个配置，它是遵循 `Rollup` 的构建规则的。其中 `entry` 属性表示构建的入口 JS 文件地址，`dest` 属性表示构建后的 JS 文件地址。`format` 属性表示构建的格式，`cjs` 表示构建出来的文件遵循 CommonJS 规范，`es` 表示构建出来的文件遵循 ES Module 规范。 `umd` 表示构建出来的文件遵循 UMD 规范。

我们以 `web-runtime-cjs` 为例，它的 `entry` 是 `resolve('web/entry-runtime.js')`，先来看一下 `resolve` 函数的定义。

源码目录：`scripts/config.js`

```js
// 引入设置的别名
const aliases = require('./alias')

const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    // 如果别名存在，则获取别名的值拼接成完整的文件路径
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    // 别名不存在，则使用根目录 + 传入的路径
    return path.resolve(__dirname, '../', p)
  }
}
```

别名源码目录：`scripts/alias.js`

```js
const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  entries: resolve('src/entries'),
  sfc: resolve('src/sfc')
}
```

这里的 `resolve` 函数也不难理解，先将传入的参数 `p` 通过 `/` 切割获取第一个作为已经设置过的别名 `aliases` 的key，如果value存在，则获取别名的值拼接成完整的文件路径。如果不存在，则使用根目录 + 传入的路径。

所以 `resolve('web/entry-runtime.js')` 会去获取别名 `web` 的实际路径`resolve('src/platforms/web')`, 然后加上 `entry-runtime.js` 作为完整的文件名。 最终，`web-runtime-cjs` 的入口文件应该是 `src/platforms/web/entry-runtime-cjs.js`。

解析完 `builds` 后，我们看下执行的 `genConfig`

```js
function genConfig (name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      // 替换变量
      replace({
        __WEEX__: !!opts.weex,
        __WEEX_VERSION__: weexVersion,
        __VERSION__: version
      }),
      // 清除flow类型检查部分的代码
      flow(),
      // 编译ES6+语法为ES2015，无需配置，比babel更轻量；
      buble(),
      // 替换模块路径中的别名
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'Vue'
    }
  }

  if (opts.env) {
    // 添加环境变量
    config.plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  // 设置私有属性_name，并且禁止枚举
  Object.defineProperty(config, '_name', {
    enumerable: false,
    value: name
  })

  return config
}
```

我们可以看出来，`genConfig` 最终 `return` 的 `config`，其实就是 `rollup` 构建 `config` 所需的配置字段。 

## 构建过程

分析完 `config` 的生成后，我们一起来看下 `config` 是如何构建成文件的

```js
build(builds)

function build (builds) {
  let built = 0
  const total = builds.length
  // 异步变同步循环构建
  const next = () => {
    buildEntry(builds[built]).then(() => {
      built++
      if (built < total) {
        next()
      }
    }).catch(logError)
  }

  next()
}

function buildEntry (config) {
  const output = config.output
  const { file, banner } = output
  // 最后生成文件名后缀为min.js的为构建环境
  const isProd = /min\.js$/.test(file)
  return rollup.rollup(config)
    // generate可以生成输出，指定output为输出选项
    .then(bundle => bundle.generate(output))
    .then(({ code }) => {
      if (isProd) {
        // 如果是构建环境，则压缩代码, 并生成压缩文件
        var minified = (banner ? banner + '\n' : '') + uglify.minify(code, {
          output: {
            ascii_only: true
          },
          compress: {
            pure_funcs: ['makeMap']
          }
        }).code
        return write(file, minified, true)
      } else {
        return write(file, code)
      }
    })
}

function write (dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report (extra) {
      // 打印特定格式日志
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }
    // 将代码写入文件内
    fs.writeFile(dest, code, err => {
      if (err) return reject(err)
      if (zip) {
        // 有压缩选项则写入完毕后压缩文件
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')')
        })
      } else {
        report()
      }
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
```

从上述代码中，我们可以看出

1. `build` 函数接受上一步我们分析的 `builds`， 并使用`promise` 异步变同步循环执行 `buildEntry` 函数。
2. `buildEntry` 函数将`config`作为调用`rollup`的参数进行构建
3. 构建完毕后，如果是生产环境，使用`uglify`压缩代码, 并生成压缩文件。否则直接生成文件

## 总结

至此，`Vue2` 的构建函数已经分析完毕。尽管在实际开发过程中我们会用 Runtime Only 版本开发比较多，但为了分析 Vue 的编译过程，我们这门课重点分析的源码是 Runtime + Compiler 的 Vue.js。
