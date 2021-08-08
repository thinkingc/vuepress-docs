# got
> Human-friendly and powerful HTTP request library for Node.js

强大的http请求库。

`node-fetch` 比较精简。
## Example
```js
const got = require('got');

(async () => {
	const {body} = await got.post('https://httpbin.org/anything', {
		json: {
			hello: 'world'
		},
		responseType: 'json'
	});

	console.log(body.data);
	//=> {hello: 'world'}
})();
```

## 参考
[got](https://www.npmjs.com/package/got)