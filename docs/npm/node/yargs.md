# yargs
> Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

Yargs 通过解析参数和生成优雅的用户界面，帮助您构建交互式命令行工具。

## 例子
#### Simple Example
```js
#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}
```
```
$ ./plunder.js --ships=4 --distance=22
Plunder more riffiwobbles!

$ ./plunder.js --ships 12 --distance 98.7
Retreat from the xupptumblers!
```
> Note: hideBin is a shorthand for process.argv.slice(2). It has the benefit that it takes into account variations in some environments, e.g., Electron.

#### Complex Example
```js
#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
  .command('serve [port]', 'start the server', (yargs) => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    if (argv.verbose) console.info(`start server on :${argv.port}`)
    serve(argv.port)
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .argv
  ```


