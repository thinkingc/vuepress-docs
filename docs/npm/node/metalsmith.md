# metalsmith
> An extremely simple, pluggable static site generator.

基于插件的静态站点生成器。

## 用法

```js
var Metalsmith = require("metalsmith");
var markdown = require("metalsmith-markdown");
var layouts = require("metalsmith-layouts");  // 包裹容器

Metalsmith(__dirname)
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'  // md 文件可配置容器layout。详见：examples/static-site 
  }))
  .build(function(err) {
    if (err) throw err;
    console.log("Build finished!");
  });
```

## 参考

[`metalsmith`官网](https://metalsmith.io/)