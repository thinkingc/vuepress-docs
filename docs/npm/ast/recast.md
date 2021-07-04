# recast

## 引入
Recast is designed to be imported using named imports:
```js
import { parse, print } from "recast";
console.log(print(parse(source)).code);

import * as recast from "recast";
console.log(recast.print(recast.parse(source)).code);
```

## 用法
ecast exposes two essential interfaces, one for parsing JavaScript code (require("recast").parse) and the other for reprinting modified syntax trees (require("recast").print).

Here's a simple but non-trivial example of how you might use .parse and .print:
```js
import * as recast from "recast";

// Let's turn this function declaration into a variable declaration.
const code = [
  "function add(a, b) {",
  "  return a +",
  "    // Weird formatting, huh?",
  "    b;",
  "}"
].join("\n");

// Parse the code using an interface similar to require("esprima").parse.
const ast = recast.parse(code);
```

Now do whatever you want to ast. Really, anything at all!

See ast-types (especially the def/core.ts) module for a thorough overview of the ast API.
```js
// Grab a reference to the function declaration we just parsed.
const add = ast.program.body[0];

// Make sure it's a FunctionDeclaration (optional).
const n = recast.types.namedTypes;
n.FunctionDeclaration.assert(add);

// If you choose to use recast.builders to construct new AST nodes, all builder
// arguments will be dynamically type-checked against the Mozilla Parser API.
const b = recast.types.builders;

// This kind of manipulation should seem familiar if you've used Esprima or the
// Mozilla Parser API before.
ast.program.body[0] = b.variableDeclaration("var", [
  b.variableDeclarator(add.id, b.functionExpression(
    null, // Anonymize the function expression.
    add.params,
    add.body
  ))
]);

// Just for fun, because addition is commutative:
add.params.push(add.params.shift());
```

[recast](https://github.com/benjamn/recast)