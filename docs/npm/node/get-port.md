# get-port
> Get an available TCP port.

获取可用的 TCP 端口。

## Example
可指定单个、多个、范围，不指定默认给随机的可用端口。

```js
const getPort = require('get-port');
 
(async () => {
    console.log(await getPort());
    //=> 51402
})();

(async () => {
    console.log(await getPort({port: 3000}));
    // Will use 3000 if available, otherwise fall back to a random port
})();

(async () => {
    console.log(await getPort({port: [3000, 3001, 3002]}));
    // Will use any element in the preferred ports array if available, otherwise fall back to a random port
})();

(async () => {
    console.log(await getPort({port: getPort.makeRange(3000, 3100)}));
    // Will use any port from 3000 to 3100, otherwise fall back to a random port
})();
```

## 参考
[get-port](https://github.com/sindresorhus/get-port/blob/HEAD/index.js)