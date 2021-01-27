---
title: 'Write a JavaScript function that returns a passed string with letters in alphabetical order.'
description: 'Assume punctuation and numbers symbols are not included in the passed string.'
input: 'webmaster'
fnName: 'alphabetOrder'
---

```js
function alphabetOrder(string) {
    return string.split('').sort().join('');
}
```


