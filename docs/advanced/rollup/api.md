---
sidebarDepth: 2
---
# JavaScript API

`Rollup` 提供了一个可从 `Node.js` 使用的 `JavaScript API`。你很少需要使用它，不过通过这个 API 我们可以比较明显的知道`Rollup` 的构建大致流程。

内容其实并不多，主要核心两个函数，`rollup()` 与 `watch()`

- `rollup.rollup`
  - `inputOptions` 对象
  - `outputOptions` 对象
- `rollup.watch`
  - `watchOptions`

其实用起来的基本思路和配置文件差不多。直接来看一下效果：

```javascript
const rollup = require('rollup');

const inputOptions = {
  input: 'src/index.js',
  external: [],
  plugins: []
}

const outputOptions = {
  dir: 'dist',
  format: 'esm',
  sourcemap: true,
  entryFileNames: '[name].[hash].js'
}

async function build() { 
  let bundle;
  let buildFailed = false;
  try {
    bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
  } catch (error) {
    buildFailed = true;
    console.error(error);
  }
  
  if (bundle) {
    // 关闭打包过程
    await bundle.close();
  }
  process.exit(buildFailed ? 1 : 0);
}

build();

const watchOptions = {
  ...inputOptions,
  output: [outputOptions],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
};
const watcher = rollup.watch(watchOptions);

watcher.on('event', event => {
  console.log(event);
  //确保每次打包完成后正确的关闭打包
  if (event.result) {
    event.result.close();
  }
})
```

其实整个过程无非就是把我们之前配置的流程转换位了js代码的形式。`watch api`很明显就是命令行中使用 `--watch` 标志运行 `Rollup` 时的效果。

我们主要来看一下`rollup()`函数，从`rollup()`函数就可以看出，`Rollup` 打包构建流程主要是两大步骤：

## build

主要负责创建模块依赖，初始化各个模块的AST(抽象语法树)，以及模块之间的依赖关系

```javascript
const rollup = require('rollup');

const inputOptions = {
  input: 'src/index.js',
  external: [],
  plugins: []
}

async function build() { 
  const bundle = await rollup.rollup(inputOptions);
  console.log(bundle); // 打印bundle对象
  console.log(bundle.cache.modules); //打印模块内容
}

build();
```

```javascript
// 打印bundle对象
{
  cache: {
    modules: [ [Object], [Object], [Object] ],
    plugins: [Object: null prototype] {}
  },
  close: [AsyncFunction: close],
  closed: false,
  generate: [AsyncFunction: generate],
  watchFiles: [
    '/Users/yingside/Desktop/rollup-api-demo/src/index.js',
    '/Users/yingside/Desktop/rollup-api-demo/src/randomNumber.js',
    '/Users/yingside/Desktop/rollup-api-demo/src/deepClone.js'
  ],
  write: [AsyncFunction: write]
}
```



```javascript
// 打印模块内容
[
  {
    assertions: {},
    ast: Node {
      type: 'Program',
      start: 0,
      end: 262,
      body: [Array],
      sourceType: 'module'
    },
    code: '/**\n' +
      ' * 随机数\n' +
      ' * @param {*} min 最小值\n' +
      ' * @param {*} max 最大值\n' +
      ' * @returns min-max之间的随机整数\n' +
      ' */\n' +
      'const randomNumber = (min, max) => {\n' +
      '  min = Math.ceil(min);\n' +
      '  max = Math.floor(max);\n' +
      '  return Math.floor(Math.random() * (max - min + 1)) + min;\n' +
      '}\n' +
      '\n' +
      'export default randomNumber',
    customTransformCache: false,
    dependencies: [],
    id: '/Users/yingside/Desktop/rollup-api-demo/src/randomNumber.js',
    meta: {},
    moduleSideEffects: true,
    originalCode: '/**\n' +
      ' * 随机数\n' +
      ' * @param {*} min 最小值\n' +
      ' * @param {*} max 最大值\n' +
      ' * @returns min-max之间的随机整数\n' +
      ' */\n' +
      'const randomNumber = (min, max) => {\n' +
      '  min = Math.ceil(min);\n' +
      '  max = Math.floor(max);\n' +
      '  return Math.floor(Math.random() * (max - min + 1)) + min;\n' +
      '}\n' +
      '\n' +
      'export default randomNumber',
    originalSourcemap: null,
    resolvedIds: [Object: null prototype] {},
    sourcemapChain: [],
    syntheticNamedExports: false,
    transformDependencies: [],
    transformFiles: undefined
  },
  {
    assertions: {},
    ast: Node {
      type: 'Program',
      start: 0,
      end: 349,
      body: [Array],
      sourceType: 'module'
    },
    code: '/**\n' +
      ' * 深拷贝\n' +
      ' * @param obj 需要深拷贝的对象\n' +
      ' * @returns 深拷贝对象\n' +
      ' */\n' +
      'const deepClone = (obj) => {\n' +
      "  if(typeof obj !== 'object' || obj === null) {\n" +
      '    return obj\n' +
      '  }\n' +
      '  const result = Array.isArray(obj) ? [] : {};\n' +
      '  for(let key in obj) {\n' +
      '    if(obj.hasOwnProperty(key)) {\n' +
      '      result[key] = deepClone(obj[key])\n' +
      '    }\n' +
      '  }\n' +
      '  return result\n' +
      '}\n' +
      'export default deepClone',
    customTransformCache: false,
    dependencies: [],
    id: '/Users/yingside/Desktop/rollup-api-demo/src/deepClone.js',
    meta: {},
    moduleSideEffects: true,
    originalCode: '/**\n' +
      ' * 深拷贝\n' +
      ' * @param obj 需要深拷贝的对象\n' +
      ' * @returns 深拷贝对象\n' +
      ' */\n' +
      'const deepClone = (obj) => {\n' +
      "  if(typeof obj !== 'object' || obj === null) {\n" +
      '    return obj\n' +
      '  }\n' +
      '  const result = Array.isArray(obj) ? [] : {};\n' +
      '  for(let key in obj) {\n' +
      '    if(obj.hasOwnProperty(key)) {\n' +
      '      result[key] = deepClone(obj[key])\n' +
      '    }\n' +
      '  }\n' +
      '  return result\n' +
      '}\n' +
      'export default deepClone',
    originalSourcemap: null,
    resolvedIds: [Object: null prototype] {},
    sourcemapChain: [],
    syntheticNamedExports: false,
    transformDependencies: [],
    transformFiles: undefined
  },
  {
    assertions: {},
    ast: Node {
      type: 'Program',
      start: 0,
      end: 131,
      body: [Array],
      sourceType: 'module'
    },
    code: 'import randomNumber from "./randomNumber.js";\n' +
      'import deepClone from "./deepClone.js";\n' +
      '\n' +
      'export default { randomNumber, deepClone }\n' +
      '\n',
    customTransformCache: false,
    dependencies: [
      '/Users/yingside/Desktop/rollup-api-demo/src/randomNumber.js',
      '/Users/yingside/Desktop/rollup-api-demo/src/deepClone.js'
    ],
    id: '/Users/yingside/Desktop/rollup-api-demo/src/index.js',
    meta: {},
    moduleSideEffects: true,
    originalCode: 'import randomNumber from "./randomNumber.js";\n' +
      'import deepClone from "./deepClone.js";\n' +
      '\n' +
      'export default { randomNumber, deepClone }\n' +
      '\n',
    originalSourcemap: null,
    resolvedIds: [Object: null prototype] {
      './randomNumber.js': [Object],
      './deepClone.js': [Object]
    },
    sourcemapChain: [],
    syntheticNamedExports: false,
    transformDependencies: [],
    transformFiles: undefined
  }
]
```



通过上面两个打印语句的结果，其实就可以分析出，在`build`阶段产生的`bunlde`对象，并没有模块打包，这个对象的作用在于存储各个模块的内容及依赖关系，并且提供了`generate(不写入)`，`write(写入磁盘)`方法，方便后续output阶段输出产物

## output

通过 `rollup()` 函数返回的对象 `bundle` 有两个重要的函数

- `generate` 生成打包产物，不写入磁盘

- `write` 生成打包产物，写入磁盘

```javascript
const rollup = require('rollup');

const inputOptions = {
  input: 'src/index.js',
  external: [],
  plugins: []
}

const outputOptions = {
  dir: 'dist',
  format: 'esm',
  sourcemap: true,
  entryFileNames: '[name].[hash].js'
}

async function build() { 
  const bundle = await rollup.rollup(inputOptions);
  const resp = await bundle.generate(outputOptions);
  console.log(resp)
}

build();
```

**执行结果：**

```javascript
{
  output: [
    {
      exports: [Array],
      facadeModuleId: '/Users/yingside/Desktop/rollup-api-demo/src/index.js',
      isDynamicEntry: false,
      isEntry: true,
      isImplicitEntry: false,
      moduleIds: [Array],
      name: 'index',
      type: 'chunk',
      dynamicImports: [],
      fileName: 'index.1730c9fc.js',
      implicitlyLoadedBefore: [],
      importedBindings: {},
      imports: [],
      modules: [Object: null prototype],
      referencedFiles: [],
      code: '/**\n' +
        ' * 随机数\n' +
        ' * @param {*} min 最小值\n' +
        ' * @param {*} max 最大值\n' +
        ' * @returns min-max之间的随机整数\n' +
        ' */\n' +
        'const randomNumber = (min, max) => {\n' +
        '  min = Math.ceil(min);\n' +
        '  max = Math.floor(max);\n' +
        '  return Math.floor(Math.random() * (max - min + 1)) + min;\n' +
        '};\n' +
        '\n' +
        '/**\n' +
        ' * 深拷贝\n' +
        ' * @param obj 需要深拷贝的对象\n' +
        ' * @returns 深拷贝对象\n' +
        ' */\n' +
        'const deepClone = (obj) => {\n' +
        "  if(typeof obj !== 'object' || obj === null) {\n" +
        '    return obj\n' +
        '  }\n' +
        '  const result = Array.isArray(obj) ? [] : {};\n' +
        '  for(let key in obj) {\n' +
        '    if(obj.hasOwnProperty(key)) {\n' +
        '      result[key] = deepClone(obj[key]);\n' +
        '    }\n' +
        '  }\n' +
        '  return result\n' +
        '};\n' +
        '\n' +
        'var index = { randomNumber, deepClone };\n' +
        '\n' +
        'export { index as default };\n' +
        '//# sourceMappingURL=index.1730c9fc.js.map\n',
      map: [SourceMap],
      preliminaryFileName: 'index.!~{001}~.js',
      sourcemapFileName: 'index.1730c9fc.js.map'
    },
    {
      fileName: 'index.1730c9fc.js.map',
      name: undefined,
      needsCodeReference: false,
      source: `{"version":3,"file":"index.1730c9fc.js","sources":["../src/randomNumber.js","../src/deepClone.js","../src/index.js"],"sourcesContent":["/**\\n * 随机数\\n * @param {*} min 最小值\\n * @param {*} max 最大值\\n * @returns min-max之间的随机整数\\n */\\nconst randomNumber = (min, max) => {\\n  min = Math.ceil(min);\\n  max = Math.floor(max);\\n  return Math.floor(Math.random() * (max - min + 1)) + min;\\n}\\n\\nexport default randomNumber","/**\\n * 深拷贝\\n * @param obj 需要深拷贝的对象\\n * @returns 深拷贝对象\\n */\\nconst deepClone = (obj) => {\\n  if(typeof obj !== 'object' || obj === null) {\\n    return obj\\n  }\\n  const result = Array.isArray(obj) ? [] : {};\\n  for(let key in obj) {\\n    if(obj.hasOwnProperty(key)) {\\n      result[key] = deepClone(obj[key])\\n    }\\n  }\\n  return result\\n}\\nexport default deepClone","import randomNumber from \\"./randomNumber.js\\";\\nimport deepClone from \\"./deepClone.js\\";\\n\\nexport default { randomNumber, deepClone }\\n\\n"],"names":[],"mappings":"AAAA;AACA;AACA;AACA;AACA;AACA;AACA,MAAM,YAAY,GAAG,CAAC,GAAG,EAAE,GAAG,KAAK;AACnC,EAAE,GAAG,GAAG,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC;AACvB,EAAE,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC;AACxB,EAAE,OAAO,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,MAAM,EAAE,IAAI,GAAG,GAAG,GAAG,GAAG,CAAC,CAAC,CAAC,GAAG,GAAG,CAAC;AAC3D;;ACVA;AACA;AACA;AACA;AACA;AACA,MAAM,SAAS,GAAG,CAAC,GAAG,KAAK;AAC3B,EAAE,GAAG,OAAO,GAAG,KAAK,QAAQ,IAAI,GAAG,KAAK,IAAI,EAAE;AAC9C,IAAI,OAAO,GAAG;AACd,GAAG;AACH,EAAE,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,GAAG,CAAC,GAAG,EAAE,GAAG,EAAE,CAAC;AAC9C,EAAE,IAAI,IAAI,GAAG,IAAI,GAAG,EAAE;AACtB,IAAI,GAAG,GAAG,CAAC,cAAc,CAAC,GAAG,CAAC,EAAE;AAChC,MAAM,MAAM,CAAC,GAAG,CAAC,GAAG,SAAS,CAAC,GAAG,CAAC,GAAG,CAAC,EAAC;AACvC,KAAK;AACL,GAAG;AACH,EAAE,OAAO,MAAM;AACf;;ACbA,YAAe,EAAE,YAAY,EAAE,SAAS;;;;"}`,
      type: 'asset'
    }
  ]
}
```






