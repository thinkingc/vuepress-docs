# cross-spawn
> A cross platform solution to node's spawn and spawnSync.

解决跨平台使用`npm`命令的问题的模块。

## 用法
Exactly the same way as node's spawn or spawnSync, so it's a drop in replacement.

```js
const spawn = require('cross-spawn');

// Spawn NPM asynchronously
const child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

// Spawn NPM synchronously
const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

// 根据返回状态码来判定依赖是否安装成功
child.on('close', function(code) {
  if(code !== 0) {
    console.log('Error occured while installing dependencies!');
    process.exit(1);
  } else {
    console.log('Installation completed successfully!');
  }
})

if(result.status !== 0) {
  console.log('Error occured while installing dependencies!');
  process.exit(1);
} else {
  console.log('Installation completed successfully!');
}
```

## 参考
[cross-spawn](https://github.com/moxystudio/node-cross-spawn)