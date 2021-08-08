# execa
> Process execution for humans

加强版的`child_process`。

## Feature
This package improves `child_process` methods with:

- Promise interface.
- Strips the final newline from the output so you don't have to do stdout.trim().
- Supports shebang binaries cross-platform.
- Improved Windows support.
- Higher max buffer. 100 MB instead of 200 KB.
- Executes locally installed binaries by name.
- Cleans up spawned processes when the parent process dies.
- Get interleaved output from stdout and stderr similar to what is printed on the terminal. (Async only)
- Can specify file and arguments as a single string without a shell
- More descriptive errors.

## 用法
```js
const execa = require('execa');

(async () => {
	const {stdout} = await execa('echo', ['unicorns']);
	console.log(stdout);
	//=> 'unicorns'
})();
```
**Pipe the child process stdout to the parent**
```js
const execa = require('execa');

execa('echo', ['unicorns']).stdout.pipe(process.stdout);
```

## API
#### execa(file, arguments, options?)
Execute a file. Think of this as a mix of `child_process.execFile()` and `child_process.spawn()`.
  
No escaping/quoting is needed.

#### execa.sync(file, arguments?, options?)

#### execa.command(command, options?)

#### execa.commandSync(command, options?)
#### execa.node(scriptPath, arguments?, options?)

## 参考
[execa](https://www.npmjs.com/package/execa)