---
title: "Right Shift Assignment"
operator: ">>="
repl: "https://repl.it/@imrandyk/RightShiftAssignment"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators#compound-assignment"
---

The `>>=` operator move the bits of the left hand operand by the number of bits in the right hand to the right.

`x >>= y` does the same as `x = x >> y`.

```cs
int twelve = 12;
Console.WriteLine(Convert.ToString(twelve, toBase: 2)); // 1100
twelve >>= 2; // now 3
Console.WriteLine(Convert.ToString(twelve, toBase: 2)); // 11
Console.WriteLine(twelve); // 3
```
