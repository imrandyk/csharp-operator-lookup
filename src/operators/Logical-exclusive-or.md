---
title: "Logical Exclusive Or"
operator: "^"
repl: "https://repl.it/@imrandyk/LogicalExclusiveOr"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#logical-exclusive-or-operator-"
---

The `^` operator computes the logical exclusive OR of its operands.

The `^` operator evaluates both operands if they elvauate to the same the result is false, otherwise it is true

```cs
Console.WriteLine(true ^ true); // False
Console.WriteLine(true ^ false); // True
Console.WriteLine(false ^ true); // True
Console.WriteLine(false ^ false); // False
```
