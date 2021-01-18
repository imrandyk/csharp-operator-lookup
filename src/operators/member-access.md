---
title: "Member Access"
operator: "."
repl: "https://repl.it/@imrandyk/Member-Access"
docs: "hhttps://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#member-access-expression-"
---

You use the `.` token to access a member of a namespace or a type.

```cs
var items = new List<double>();
items.Add(Math.PI);
items.Add(int.MaxValue);
items.Add("Member Access".Length);
Console.WriteLine($"{items.Count} values to show:");
Console.WriteLine(string.Join(", ", items));
```
