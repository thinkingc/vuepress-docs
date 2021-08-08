# ora
> Elegant terminal spinner

优雅的终端加载标志。
![spinner](https://raw.githubusercontent.com/sindresorhus/ora/HEAD/screenshot-2.gif)
## 用法
```js
const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
```

## 参考
[ora](https://www.npmjs.com/package/ora)