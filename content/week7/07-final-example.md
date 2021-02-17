---
title: High Order Implementation
description: Final example

---

```js
01  function logger1(callback){
02    return (...args) => {
03      console.log('these are my arguments: ', ...args)
04      const result = callback(...args)
05      console.log('this is the result: ', result)
06    }
07  }

    // without arrow function syntax
 
08  function logger2(callback){
09    return function(...args){
10      console.log('these are my arguments: ', ...args)
11      const result = callback(...args)
12      console.log('this is the result: ', result)
13    }
14  }
 
    // without the spread operator or arrow function syntax 
    // (pre-ES6) 
  
15  function logger3(callback){
16    return function(){
17      console.log('these are my arguments: ', arguments)
18        const result = callback.apply(null, arguments)
19      console.log('this is the result: ', result)
20    }
21  }
```
