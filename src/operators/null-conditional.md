---
title: "Null Conditional"
operator: "?."
repl: "https://repl.it/@imrandyk/Null-Conditional"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-"
---

The `?.` operator acts the same as `.`, but if the left hand item is null then the result of the right hand is null also instead of throwing an error.

```cs
// Given a Person class of
public class Person {
    public string Name { get; set;}
}

Person me = null;

Console.WriteLine(me.Name); // NullReferenceException
Console.WriteLine(me?.Name); // Blank string
me = new Person { Name = "Randy" };
Console.WriteLine(me?.Name); // Randy
```
