# mkdirp
类似`mkdir -p`, 可递归创建目录。

## Example
```js
const mkdirp = require('mkdirp')
 
// return value is a Promise resolving to the first directory created
mkdirp('/tmp/foo/bar/baz').then(made =>
  console.log(`made directories, starting with ${made}`))
```
Or, if you don't have time to wait around for promises:
```js
const mkdirp = require('mkdirp')
 
// return value is the first directory created
const made = mkdirp.sync('/tmp/foo/bar/baz')
console.log(`made directories, starting with ${made}`)
```

And now /tmp/foo/bar/baz exists, huzzah!

## API
### mkdirp(dir, [opts]) -> Promise<String | undefined>
Create a new directory and any necessary subdirectories at `dir` with octal permission string `opts.mode`. If `opts` is a string or number, it will be treated as the `opts.mode`.

### mkdirp.sync(dir, opts) -> String|null

## 参考
[mkdirp](https://www.npmjs.com/package/mkdirp)