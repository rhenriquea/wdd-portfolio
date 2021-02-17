---
title: High Order Implementation
description: Example 3

---

```js
01  function combined(...args){
02    return ((x, y) => {
03      return x + y
04    })(...args)
05  }

// without arrow function syntax

06  function combined(...args){
07    return (function adder(x, y){
08      return x + y
09    })(...args)  
10  }
```
