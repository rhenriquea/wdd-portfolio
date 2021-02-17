---
title: High Order Functions
description: description
---

```js
01  function hello() {
02    console.log("hello world")
03  } 
04  function start(callback){
05    callback()
06  } 
07  start(hello)
// "hello world"
```
