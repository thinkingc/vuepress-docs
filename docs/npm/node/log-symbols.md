# log-symbols
> Colored symbols for various log levels

根据不同日志级别，打印不同的彩色符号。(可配合`chalk`)
![例子](https://raw.githubusercontent.com/sindresorhus/log-symbols/HEAD/screenshot.png)

## 用法
```js
const logSymbols = require('log-symbols');

console.log(logSymbols.success, 'success');
console.log(logSymbols.error, 'error');
console.log(logSymbols.warning, 'warning');
console.log(logSymbols.info, 'info');
```
```js
✔ success
✖ error
⚠ warning
ℹ info
```

## 参考
[log-symbols](https://www.npmjs.com/package/log-symbols)