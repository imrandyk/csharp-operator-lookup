---
title: "Not Equal"
operator: "!="
repl: "https://repl.it/@imrandyk/NotEqual"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/equality-operators#inequality-operator-"
---

The `!=` returns false if the left hand operand is equal to the right hand.

```cs
int a = 1 + 2 + 3;
int b = 6;
Console.WriteLine(a != b); // False

char c1 = 'a';
char c2 = 'A';
Console.WriteLine(c1 != c2); // True
Console.WriteLine(c1 != char.ToLower(c2)); // False
```
