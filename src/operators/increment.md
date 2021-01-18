---
title: "Increment"
operator: "++"
repl: "https://repl.it/@imrandyk/Increment"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators#increment-operator-"
---

The unary increment operator `++` increments its operand by 1.

The increment operator can be used in one of two ways as a postfix `x++` or a prefix `++x`.

```cs
var x = 0;

// Postfix Use
Console.WriteLine(x++); // 0
// increment happens AFTER the var is used
Console.WriteLine(x); // 1

// Prefix Use
Console.WriteLine(++x); // 2
// increment happens BEFORE the var is used
Console.WriteLine(x); // 2
```
