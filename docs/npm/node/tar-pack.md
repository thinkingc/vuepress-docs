# tar-pack
> Package and un-package modules of some sort (in tar/gz bundles). This is mostly useful for package managers.

压缩、解压。

## API
### pack(folder|packer, [options])
Pack the folder at `folder` into a gzipped tarball and return the tgz as a stream. Files ignored by .gitignore will not be in the package.  

**Example:**
```js
var write = require('fs').createWriteStream
var pack = require('tar-pack').pack
pack(process.cwd())
  .pipe(write(__dirname + '/package.tar.gz'))
  .on('error', function (err) {
    console.error(err.stack)
  })
  .on('close', function () {
    console.log('done')
  })
```

### unpack(folder, [options,] cb)
Return a stream that unpacks a tarball into a folder at `folder`. N.B. the output folder will be removed first if it already exists.  

**Example:**
```js
var read = require('fs').createReadStream
var unpack = require('tar-pack').unpack
read(process.cwd() + '/package.tar.gz')
  .pipe(unpack(__dirname + '/package/', function (err) {
    if (err) console.error(err.stack)
    else console.log('done')
  }))
```

## 参考
[tar-pack](https://www.npmjs.com/package/tar-pack)