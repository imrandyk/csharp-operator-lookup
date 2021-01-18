---
title: "Conditional Logical And"
operator: "&&"
repl: "https://repl.it/@imrandyk/ConditionalLogicalAnd"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#conditional-logical-and-operator-"
---

The `&&` operator "short-circuits" the logical AND of its operands.

The `&&` operator evaluates the left hand operand and if its false stops the evaluation of the right hand operand. If the left is true then right hand is then evaluated

```cs
public bool Right()
{
    Console.WriteLine("right operand is evaluated.");
    return true;
}

bool a = false && Right();
Console.WriteLine(a);
// Output:
// False

bool b = true && Right();
Console.WriteLine(b);
// Output:
// right operand is evaluated.
// True
```
