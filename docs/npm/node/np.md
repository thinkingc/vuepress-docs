# np
> A better npm publish

超棒的npm发布包。

## Interactive UI
Run np without arguments to launch the interactive UI that guides you through publishing a new version.
![](https://raw.githubusercontent.com/sindresorhus/np/HEAD/screenshot-ui.png)

## Config
package.json
```js
{
	"name": "superb-package",
	"np": {
		"yarn": false,
		"contents": "dist"
	}
}
```
.np-config.json
```js
{
	"yarn": false,
	"contents": "dist"
}
```
.np-config.js or .np-config.cjs
```js
module.exports = {
	yarn: false,
	contents: 'dist'
};
```

## 参考
[np](https://www.npmjs.com/package/np)