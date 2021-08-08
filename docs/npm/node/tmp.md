# tmp
> A simple temporary file and directory creator for node.js.  
> If you do not want to store your temporary directories and files in the standard OS temporary directory, then you are free to override that as well.

node.js 的一个简单的**临时文件和目录**处理。

## 用法
可使用（同步或异步）创建临时文件或文件夹。  
#### 创建临时文件:
```js
const tmp = require('tmp');
 
//  异步
tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;
 
  console.log('File: ', path);
  console.log('Filedescriptor: ', fd);
  
  // If we don't need the file anymore we could manually call the cleanupCallback
  // But that is not necessary if we didn't pass the keep option because the library
  // will clean after itself.
  cleanupCallback();
});
```

```js
// 同步
const tmpobj = tmp.fileSync();
console.log('File: ', tmpobj.name);
console.log('Filedescriptor: ', tmpobj.fd);
  
// If we don't need the file anymore we could manually call the removeCallback
// But that is not necessary if we didn't pass the keep option because the library
// will clean after itself.
tmpobj.removeCallback();
```

#### 创建临时文件夹
```js
const tmp = require('tmp');

// 异步
tmp.dir(function _tempDirCreated(err, path, cleanupCallback) {
  if (err) throw err;

  console.log('Dir: ', path);
  
  // Manual cleanup
  cleanupCallback();
});
```
```js
const tmp = require('tmp');
 
// 同步
const tmpobj = tmp.dirSync();
console.log('Dir: ', tmpobj.name);
// Manual cleanup
tmpobj.removeCallback();
```

## 参考
[tmp](https://www.npmjs.com/package/tmp)