---
title: "Index From End"
operator: "[^n]"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators#bitwise-complement-operator-"
---

When using arrays you can start at the end it helps to think of this operator as `[^n]` mean `leangh -` so `arr[^1]` would do the same as `arr[arr.Length - 1]`.

```cs
int[] xs = new[] { 0, 10, 20, 30, 40 };

Console.WriteLine(xs[^1]);  // 40
Console.WriteLine(xs[^3]);  // 20
Console.WriteLine(xs.Length);  // 0
```
