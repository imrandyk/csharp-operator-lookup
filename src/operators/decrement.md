---
title: "Decrement"
operator: "--"
repl: "https://repl.it/@imrandyk/Decrement"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators#decrement-operator---"
---

The unary decrement operator `--` decrements its operand by 1.

The decrement operator can be used in one of two ways as a postfix `x--` or a prefix `--x`.

```cs
var x = 1;

// Postfix Use
Console.WriteLine(x--); // 1
// decrement happens AFTER the var is used
Console.WriteLine(x); // 0

// Prefix Use
Console.WriteLine(--x); // -1
// decrement happens BEFORE the var is used
Console.WriteLine(x); // -1
```
