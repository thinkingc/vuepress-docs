# yargs-parse
> The mighty option parser used by yargs.

解析命令行参数。（包大小比`yargs`小，功能也比较少，但够用！）

## 用法
```js
const argv = require('yargs-parser')(process.argv.slice(2))
console.log(argv)
```
```js
$ node example.js --foo=33 --bar hello
{ _: [], foo: 33, bar: 'hello' }
```
or parse a string!
```js
const argv = require('yargs-parser')('--foo=99 --bar=33')
console.log(argv)
{ _: [], foo: 99, bar: 33 }
```
## 参考
[yargs-parse](https://github.com/yargs/yargs-parser)