# babel
`babel` 是一个JavaScript 编译器。  

## @babel/core
`babel` 核心包，包含各种 transform 方法。

## @babel/parser
> 负责解析代码成为 ast 语法树🌲[astexplorer](https://astexplorer.net/)。

Heavily based on `acorn` and `acorn-jsx`.

## @babel/traverse
> 遍历 node types 节点。

```js
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
  // 方式1
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
  // 方式2
  FunctionDeclaration: function(path) {
    path.node.id.name = "x";
  },
});
```

## @babel/generator
> Turns an AST into code.

```js
import { parse } from "@babel/parser";
import generate from "@babel/generator";

const code = "class Example {}";
const ast = parse(code);

const output = generate(
  ast,
  {
    /* options */
  },
  code
);
```

## @babel/types
> This module contains methods for building ASTs manually and for checking the types of AST nodes.

## 参考
[babel](https://github.com/babel/babel)  
[babel 中文文档](https://www.babeljs.cn/)