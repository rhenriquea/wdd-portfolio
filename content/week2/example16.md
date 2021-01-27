---
title: 'Write a JavaScript function to extract unique characters from a string.'
description: ''
input: 'supercalifragilisticexpialidocious'
fnName: 'uniqueChar'
---

```js
function uniqueChar(string) {
    const chars = string.split('');
    const uniqueArr = [...new Set(chars)];
    const uniqueChars = uniqueArr.join('');
    return uniqueChars;
}
```


