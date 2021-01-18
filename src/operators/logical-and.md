---
title: "Logical And"
operator: "&"
repl: "https://repl.it/@imrandyk/LogicalAnd"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#conditional-logical-and-operator-"
---

The `&` operator computes the logical AND of its operands.

The `&` operator evaluates both operands even if the left-hand operand evaluates to false, so that the operation result is false regardless of the value of the right-hand operand.

```cs
Console.WriteLine(true & false); // False
Console.WriteLine(false & false); // False
Console.WriteLine(false & true); // False
Console.WriteLine(true & true); // True
```
