---
title: "Null Coalescing Assignment"
operator: "??="
docs: "hhttps://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-coalescing-operator"
---

The `??=` operator stays the same unless it is null, then it is set to the value of the right hand.

`x ??= y` does the same as `x = x ?? y`

```cs
int a = 2;
int? b = null;
a ??= 4;
Console.WriteLine(a); // 2
b ??= 4;
Console.WriteLine(b); // 4
```
