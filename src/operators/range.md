---
title: "Range"
operator: ".."
docs: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-"
---

This operator allows you to specify the start and end indecies of an array. You can exclude the left, `..b`, side of the operand to start at the beginning and go to an index. You can exclude the right, `a..`, side of the operand to start at an index and go to the end.

```cs
int[] numbers = new[] { 0, 10, 20, 30, 40, 50 };
int start = 1;
int amountToTake = 3;

int[] subset = numbers[start..(start + amountToTake)];
Console.WriteLine(string.Join(" ", subset)); // 10 20 30

int[] justOne = numbers[..start];
Console.WriteLine(string.Join(" ", justOne)); // 0

int[] secondOn = numbers[start..];
Console.WriteLine(string.Join(" ", secondOn)); // 10 20 30 40 50
```
