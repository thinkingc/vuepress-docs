# marked-terminal
> **Custom Renderer for marked allowing for printing Markdown to the Terminal**. Supports pretty tables, syntax highlighting for javascript, and overriding all colors and styles.

以markdown的形式在终端打印信息。

## Install
```
npm install marked marked-terminal
```

## Example
```js
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

// Show the parsed data
console.log(marked('# Hello \n This is **markdown** printed in the `terminal`'));
```
![效果图](https://raw.githubusercontent.com/mikaelbr/marked-terminal/HEAD/screenshot.png)

## API
Constructur: new TerminalRenderer([options][, highlightOptions])

`options`
------------
Optional Used to override default styling.  
Default values are:
```js
var defaultOptions = {
  // Colors
  code: chalk.yellow,
  blockquote: chalk.gray.italic,
  html: chalk.gray,
  heading: chalk.green.bold,
  firstHeading: chalk.magenta.underline.bold,
  hr: chalk.reset,
  listitem: chalk.reset,
  table: chalk.reset,
  paragraph: chalk.reset,
  strong: chalk.bold,
  em: chalk.italic,
  codespan: chalk.yellow,
  del: chalk.dim.gray.strikethrough,
  link: chalk.blue,
  href: chalk.blue.underline,

  // Formats the bulletpoints and numbers for lists
  list: function (body, ordered) {/* ... */},

  // Reflow and print-out width
  width: 80, // only applicable when reflow is true
  reflowText: false,

  // Should it prefix headers?
  showSectionPrefix: true,

  // Whether or not to undo marked escaping
  // of enitities (" -> &quot; etc)
  unescape: true,

  // Whether or not to show emojis
  emoji: true,

  // Options passed to cli-table
  tableOptions: {},

  // The size of tabs in number of spaces or as tab characters
  tab: 3 // examples: 4, 2, \t, \t\t

  image: function (href, title, text) {} // function for overriding the default image handling.
};
```

Example of overriding defaults
-----------
```js
marked.setOptions({
  renderer: new TerminalRenderer({
    codespan: chalk.underline.magenta,
  })
});
```

## 参考
[marked-terminal](https://www.npmjs.com/package/marked-terminal)