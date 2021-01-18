---
title: "Conditional Logical Or"
operator: "||"
repl: "https://repl.it/@imrandyk/ConditionalLogicalOr"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators#conditional-logical-and-operator-"
---

The `||` operator "short-circuits" the logical OR of its operands.

The `||` operator evaluates the left hand operand and if its true stops the evaluation of the right hand operand. If the left is false then right hand is then evaluated

```cs
public bool Right()
{
    Console.WriteLine("right operand is evaluated.");
    return true;
}

bool a = false || Right();
Console.WriteLine(a);
// Output:
// right operand is evaluated.
// False

bool b = true || Right();
Console.WriteLine(b);
// Output:
// True
```
