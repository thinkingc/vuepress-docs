# minimist
> parse argument options

This module is the guts of optimist's argument parser without all the fanciful decoration.

专注解析命令行参数。（包大小比`yargs-parser`小，功能也比较少，但够用！）

## Example
```js
var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
```

```js
$ node example/parse.js -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }
```

```js
$ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
```
## 参考
[minimist](https://www.npmjs.com/package/minimist)