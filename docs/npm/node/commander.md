# commander
> The complete solution for **node.js command-line interfaces**.

完美的**node.js命令行**解决方案。

## 声明 program 变量
为简化使用，Commander 提供了一个全局对象。本文档的示例代码均按此方法使用：
```js
const { program } = require('commander');
program.version('0.0.1');
```  

如果程序较为复杂，用户需要以多种方式来使用 Commander，如单元测试等。创建本地 Command 对象是一种更好的方式：
```js
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');
```

## option 配置
Commander 使用`.option()`方法来定义选项，同时可以附加选项的简介。每个选项可以定义一个短选项名称（-后面接单个字符）和一个长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔。  

选项可以通过在Command对象上调用`.opts()`方法来获取。对于多个单词的长选项，使用驼峰法获取，例如`--template-engine`选项通过`program.opts().templateEngine`获取。  

多个短选项可以合并简写，其中最后一个选项可以附加参数。 例如：-a -b -p 80 也可以写为 -ab -p80 ，甚至进一步简化为 -abp80。  

`--`可以标记选项的结束，后续的参数均不会被命令解释，可以正常使用。  

默认情况下，选项在命令行中的顺序不固定，一个选项可以在其他参数之前或之后指定。    

### 常用选项类型
有两种最常用的选项：  
1. boolean 型选项，选项无需配置参数。
2. 带参数选项（使用尖括号声明在该选项后，如`--expect <value>`）。如果在命令行中不指定具体的选项及参数，则会被定义为 undefined。

```js
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);  // 格式化处理 options。process.argv 收集命令行参数，为默认值，可选

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
```
```
$ pizza-options -d
{ debug: true, small: undefined, pizzaType: undefined }
pizza details:
$ pizza-options -p
error: option '-p, --pizza-type <type>' argument missing
$ pizza-options -ds -p vegetarian
{ debug: true, small: true, pizzaType: 'vegetarian' }
pizza details:
- small pizza size
- vegetarian
$ pizza-options --pizza-type=cheese
pizza details:
- cheese
```  
通过 program.parse(arguments) 方法处理参数，没有被使用的选项会存放在 program.args 数组中。该方法的参数是可选的，默认值为 process.argv。

### 零碎点
1. 选项设置默认值
   1. `program.option('-c, --cheese <type>', 'add the specified type of cheese', 'blue'); // 第三个参数为默认值`
2. 必填选项
   1. 通过`.requiredOption`方法可以设置选项为必填。必填选项要么设有默认值，要么必须在命令行中输入，对应的属性字段在解析时必定会有赋值。该方法其余参数与`.option`一致。
3. 变长参数选项
   1. 定义选项时，可以通过使用`...`来设置参数为可变长参数。在命令行中，用户可以输入多个参数，解析后会以数组形式存储在对应属性字段中。在输入下一个选项前（`-`或`--`开头），用户输入的指令均会被视作变长参数。与普通参数一样的是，可以通过--标记当前命令的结束。
4. 其他的选项类型，取反选项，以及可选参数的选项

## command 命令
通过`.command()`或`.addCommand()`可以配置命令，有两种实现方式：为命令绑定处理函数，或者将命令单独写成一个可执行文件（详述见后文）。子命令支持嵌套（示例代码）。

`.command()`的第一个参数可以配置命令名称及命令参数，参数支持必选（尖括号表示）、可选（方括号表示）及变长参数（点号表示，如果使用，只能是最后一个参数）。

使用`.addCommand()`向program增加配置好的子命令。

例如:
```js
// 通过绑定处理函数实现命令（这里的指令描述为放在`.command`中）
// 返回新生成的命令（即该子命令）以供继续配置
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called');  // 触发：node path.js clone react-app
  });

// 通过独立的的可执行文件实现命令 (注意这里指令描述是作为`.command`的第二个参数)
// 返回最顶层的命令以供继续添加子命令
program
  .command('start <service>', 'start named service')
  .command('stop [service]', 'stop named service, or all if no name supplied');

// 分别装配命令
// 返回最顶层的命令以供继续添加子命令
program
  .addCommand(build.makeBuildCommand());  
```


### 设置命令参数
通过`.arguments`可以为最顶层命令指定命令参数，对子命令而言，参数都包括在`.command`调用之中了。尖括号（例如`<required>`）意味着必选，而方括号（例如`[optional]`）则代表可选。可以向`.description()`方法传递第二个参数，从而在帮助中展示命令参数的信息。该参数是一个包含了 “命令参数名称：命令参数描述” 键值对的对象。  
```js
program
  .version('0.1.0')
  .arguments('<username> [password]')
  .description('test command', {
    username: 'user to login',
    password: 'password for user, if required'
  })
  .action((username, password) => {
    console.log('username:', username);
    console.log('environment:', password || 'no password given');
  });
```

### 处理函数
命令处理函数的参数，为该命令声明的所有参数，除此之外还会附加两个额外参数：一个是解析出的选项，另一个则是该命令对象自身。
```js
program
  .arguments('<name>')
  .option('-t, --title <honorific>', 'title to use before name')
  .option('-d, --debug', 'display some debugging')
  .action((name, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options);
    }
    const title = options.title ? `${options.title} ` : '';
    console.log(`Thank-you ${title}${name}`);
  });
```
处理函数支持async，相应的，需要使用.parseAsync代替.parse。
```js
async function run() { /* 在这里编写代码 */ }

async function main() {
  program
    .command('run')
    .action(run);
  await program.parseAsync(process.argv);
}
```
在命令行上使用命令时，选项和命令参数必须是合法的，使用未知的选项，或缺少所需的命令参数，会提示异常。如要允许使用未知的选项，可以调用`.allowUnknownOption()`。默认情况下，传入过多的参数并不报错，但也可以通过调用`.allowExcessArguments(false)`来启用过多参数的报错。

## 自定义事件监听
监听命令和选项可以执行自定义函数。
```js
program.on('option:verbose', function () {
  process.env.VERBOSE = this.verbose;
});

program.on('command:*', function (operands) {
  console.error(`error: unknown command '${operands[0]}'`);
  const availableCommands = program.commands.map(cmd => cmd.name());
  mySuggestBestMatch(operands[0], availableCommands);
  process.exitCode = 1;
});
```

## 例子
在只包含一个命令的程序中，无需定义处理函数。
```js
const { program } = require('commander');

program
  .description('An application for pizza ordering')
  .option('-p, --peppers', 'Add peppers')
  .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
  .option('-C, --no-cheese', 'You do not want any cheese');

program.parse();

const options = program.opts();
console.log('you ordered a pizza with:');
if (options.peppers) console.log('  - peppers');
const cheese = !options.cheese ? 'no' : options.cheese;
console.log('  - %s cheese', cheese);
```

在包含多个命令的程序中，应为每个命令指定处理函数，或独立的可执行程序。
```js
const { Command } = require('commander');
const program = new Command();

program
  .version('0.0.1')
  .option('-c, --config <path>', 'set config path', './deploy.conf');

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option('-s, --setup_mode <mode>', 'Which setup mode to use', 'normal')
  .action((env, options) => {
    env = env || 'all';
    console.log('read config from %s', program.opts().config);
    console.log('setup for %s env(s) with %s mode', env, options.setup_mode);
  });

program
  .command('exec <script>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option('-e, --exec_mode <mode>', 'Which exec mode to use', 'fast')
  .action((script, options) => {
    console.log('read config from %s', program.opts().config);
    console.log('exec "%s" using %s mode and config %s', script, options.exec_mode, program.opts().config);
  }).addHelpText('after', `
Examples:
  $ deploy exec sequential
  $ deploy exec async`
  );
  
program.parse(process.argv);
```

## 参考
[commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)  
[一款破产版脚手架的诞生](https://juejin.cn/post/6844903608484364302)