# globby
> User-friendly glob matching

Based on fast-glob but adds a bunch of useful features.

## Features
- Promise API
- Multiple patterns
- Negated patterns: ['foo*', '!foobar']
- Expands directories: foo → foo/**/*
- Supports .gitignore

## 用法
```
├── unicorn
├── cake
└── rainbow
```
```js
const globby = require('globby');

(async () => {
	const paths = await globby(['*', '!cake']);

	console.log(paths);
	//=> ['unicorn', 'rainbow']
})();
```

## API
### globby(patterns, options?)
Returns a `Promise<string[]>` of matching paths.

#### patterns
Type: string | string[]

See supported minimatch patterns.

#### options
Type: object

See the `fast-glob` options in addition to the ones below.

## 参考
[globby](https://www.npmjs.com/package/globby)