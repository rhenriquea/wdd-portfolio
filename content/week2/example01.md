---
title: 'Write a JavaScript function that reverse a number'
description: ''
input: 32243
fnName: 'reverseNumber'
---

```js
function reverseNumber(input) {
  const nString = `${input}`;
  return nString.split('').reverse().join('');
}
```
