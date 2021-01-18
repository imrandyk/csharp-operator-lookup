---
title: "Null Coalescing"
operator: "??"
repl: "https://repl.it/@imrandyk/NullCoalescing"
docs: "hhttps://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-coalescing-operator"
---

The `??` operator retunrs the left hand operand if it is not null, if it is it retunrs the right hand operand.

```cs
public int? Right()
{
    Console.WriteLine("right operand is evaluated.");
    return 3;
}

int? a = null;
int? b = 4;

int? c = a ?? Right();
Console.WriteLine(c);
// Output:
// right operand is evaluated.
// 3

int? d = b ?? Right();
Console.WriteLine(d);
// 4
```
