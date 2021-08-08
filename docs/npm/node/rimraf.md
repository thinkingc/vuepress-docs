# rimraf
以包的形式包装`rm -rf`命令，就是用来删除文件和文件夹的，不管文件夹是否为空，都可以删除。

## 用法
这个包只提供一个方法：`rimraf(pathName, [opts], function(err){})`
```js
const rimraf = require('rimraf');
rimraf('./test.txt', function (err) { // 删除当前目录下的 test.txt
  console.log(err);
});
```

## CLI
If installed with `npm install rimraf -g`, it can be used as a global command `rimraf <path> [<path> ...]` which is useful for cross platform support.

## 参考
[rimraf](https://www.npmjs.com/package/rimraf)