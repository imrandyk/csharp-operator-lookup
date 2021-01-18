---
title: "Lambda"
operator: "=>"
repl: "https://repl.it/@imrandyk/Lambda"
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-operator"
---

This operator can be used in two forms, as a lambda and as the seperator of a member name and the member implementation in an expression body definition.

```cs
// Lambda Use
string[] languages = { "c-charp", "javascript", "java" };
var cLanguages = languages.Where(w => w.StartsWith("c"));
Console.WriteLine(cLanguages.Count()); // 1

// Expression Body Use
public string hello() => "Hello";
Console.WriteLine($"{hello()} World!"); // Hello World!

```
