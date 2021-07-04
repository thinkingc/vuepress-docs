# jscodeshift

## 用法
```js
/**
 * This replaces every occurrence of variable "foo".
 */
module.exports = function(fileInfo, api, options) {
  // transform `fileInfo.source` here
  // ...
  // return changed source
  return api.jscodeshift(fileInfo.source)
    .findVariableDeclarators('foo')
    .renameTo('bar')
    .toSource();
}
```

[jscodeshift](https://github.com/facebook/jscodeshift)  
[字节前端如何基于 AST 做国际化重构？](https://mp.weixin.qq.com/s/NC700iM9vfEBWNg35LZPJw)