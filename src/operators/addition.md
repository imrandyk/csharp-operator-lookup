---
title: "Addition"
operator: "+"
repl: "https://repl.it/@imrandyk/Addition"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators#addition-operator-"
---

This operator adds two numbers, it is commonly used to concatenate strings together. If a number and a string are used together it will concatenate them together.

Less commonly it can be used for combing delgates of the same type.

```cs
// Mathmatical Use
Console.WriteLine (1 + 1); // 2

// String Concatenation Use
Console.WriteLine("Hello " + "World"); // "Hello World"
Console.WriteLine(1 + "1"); // "11"

// Delegate Use
Action a = () => Console.Write(1+1);
Action b = () => Console.Write(1+1);
Action ab = a + b;
ab(); // "22"
```
