---
title: "Subtraction"
operator: "-"
repl: "https://repl.it/@imrandyk/Subtraction"
docs: "hhttps://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators#subtraction-operator--"
---

This operator subtracts one number from another.

As a unary operator it defines a number as a negative, for example `-1`.

Less commonly it can be used for removing delgates of the same type.

```cs
// Mathmatical Use
Console.WriteLine (2 - 1); // 1

// Unary Use
Console.WriteLine(-1); // -1

// Delegate Use
Action a = () => Console.Write("a");
Action b = () => Console.Write("b");
Action ab = a + b + a - a;
ab(); // "ab"
```
