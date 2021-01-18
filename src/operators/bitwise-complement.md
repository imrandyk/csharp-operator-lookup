---
title: "Bitwise Complement"
operator: "~"
repl: "https://repl.it/@imrandyk/BitwiseComplement"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators#bitwise-complement-operator-"
---

This operator takes the binary version of the operand and flips or negates each bit.

So all `0` bits become a `1` and all `1` bits become a `0`.

```cs
int five = 5; // 32 bits wide
Console.WriteLine(Convert.ToString(five, toBase: 2)); // 101
Console.WriteLine(Convert.ToString(~five, toBase: 2)); // Flipped
// 11111111111111111111111111111010
// the reason for all the 1's is cause an
// 5 has 29 bits in the front set to 0.
```
