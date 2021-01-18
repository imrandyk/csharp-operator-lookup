---
title: "Logical Or"
operator: "|"
repl: "https://repl.it/@imrandyk/LogicalOr"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#logical-or-operator-"
---

The `|` operator computes the logical OR of its operands.

The `|` operator evaluates both operands even if the left-hand operand evaluates to true, so that the operation result is true regardless of the value of the right-hand operand.

```cs
Console.WriteLine(true | false); // True
Console.WriteLine(false | false); // False
Console.WriteLine(false | true); // True
Console.WriteLine(true | true); // True
```
