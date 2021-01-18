---
title: "Logical And Assigmnent"
operator: "&="
repl: "https://repl.it/@imrandyk/LogicalAndAssignment"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#compound-assignment"
---

The `&=` operator performs a logical and on the left and right operands.

`x &= y` does the same as `x = x & y`

```cs
bool test = true;
test &= false;
Console.WriteLine(test); // False
```
