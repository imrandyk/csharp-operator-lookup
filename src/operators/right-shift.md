---
title: "Right Shift"
operator: ">>"
repl: "https://repl.it/@imrandyk/Right-Shift"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators#right-shift-operator-"
---

The `>>` operator move the bits of the left hand operand by the number of bits in the right hand to the right.

```cs
int six = 6;
Console.WriteLine(Convert.ToString(six, toBase: 2)); // 110
Console.WriteLine(Convert.ToString(six >> 2, toBase: 2)); // 1
```
