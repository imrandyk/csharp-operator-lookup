---
title: "Left Shift"
operator: "<<"
repl: "https://repl.it/@imrandyk/Left-Shift"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators#left-shift-operator-"
---

The `<<` operator move the bits of the left hand operand by the number of bits in the right hand to the left.

```cs
int six = 6;
Console.WriteLine(Convert.ToString(six, toBase: 2)); // 110
Console.WriteLine(Convert.ToString(six << 2, toBase: 2)); // 11000
```
