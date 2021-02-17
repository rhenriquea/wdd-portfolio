---
title: High Order Implementation
description: description
---

```js
01  function add(x, y){
02    return x + y
03  }
 
04  function square(x, y){
05    return x * y
06  }

07  function sumArray(arr){
08    return arr.reduce((accumulator, currentValue) => {
09      return accumulator + currentValue
10    })
11  }
 
12  const logAdd = logger(add)
13  const logSquare = logger(square)
14  const logSum = logger(sumArray)

16  logAdd(1, 2) 
// "these are my arguments:" 1 2
// "this is the result:" 3
  
17  logSquare(3, 3)
// "these are my arguments:" 3 3
// "this is the result:" 9
 
18  logSum([1, 2, 3])
// "these are my arguments:" [1, 2, 3]
// "this is the result:" 6
```
