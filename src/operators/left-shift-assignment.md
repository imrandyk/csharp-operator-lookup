---
title: "Left Shift Assignment"
operator: "<<="
repl: "https://repl.it/@imrandyk/LeftShiftAssignment"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators#compound-assignment"
---

The `<<=` operator move the bits of the left hand operand by the number of bits in the right hand to the left.

`x <<= y` does the same as `x = x <<= y`.

```cs
int six = 6;
Console.WriteLine(Convert.ToString(six, toBase: 2)); // 110
six <<= 2; // now 24
Console.WriteLine(Convert.ToString(six, toBase: 2)); // 11000
Console.WriteLine(six); // 24
```
