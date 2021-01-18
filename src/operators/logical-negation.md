---
title: "Logical negation"
operator: "!"
repl: "https://repl.it/@imrandyk/LogicalNegation"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#logical-negation-operator-"
---

This operator negates a operand, so a `true` becomes a `false` and a `false` becomes a `true`.

```cs
// Mathmatical Use
bool isTrue = true;
Console.WriteLine(isTrue); // True
Console.WriteLine(!isTrue); // False

bool isFalse = false;
Console.WriteLine(isFalse); // False
Console.WriteLine(!isFalse); // True

// Given a fucntion
public static bool returnOpposite(bool b) => !b;

// the ! can also be used on any funciton/expressions
// that returns a bool
Console.WriteLine(!returnOpposite(true)); // True
```
