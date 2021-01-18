---
title: "Logical Exclusive Or Assigmnent"
operator: "^="
repl: "https://repl.it/@imrandyk/LogicalExclusiveOrAssignment"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#compound-assignment"
---

The `^=` operator performs a logical exclusive or on the left and right operands.

`x ^= y` does the same as `x = x ^ y`

```cs
bool test = false;
test ^= true;
Console.WriteLine(test); // True
```
