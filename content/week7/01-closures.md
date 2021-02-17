---
title: Closures
description: description
---

```js
01  const globalVar = "xyz"
02  (function outerFunc(outerArg){
03    const outerVar = 'a'
04    (function innerFunc(innerArg){
05      const innerVar = 'b'
06      console.log(outerArg) // 123
07      console.log(innerArg) // 456
08      console.log(outerVar) // "a"
09      console.log(innerVar) // "b"
10     console.log(globalVar) // "xyz"
11    })(456)
12  })(123)
```
