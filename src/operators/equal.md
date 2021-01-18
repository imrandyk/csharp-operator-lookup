---
title: "Equal"
operator: "=="
repl: "https://repl.it/@imrandyk/Equal"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/equality-operators#equality-operator-"
---

The `==a` returns true if the left hand operand is equal to the right hand.

```cs
int a = 1 + 2 + 3;
int b = 6;
Console.WriteLine(a == b); // True

char c1 = 'a';
char c2 = 'A';
Console.WriteLine(c1 == c2); // False
Console.WriteLine(c1 == char.ToLower(c2)); // True
```
