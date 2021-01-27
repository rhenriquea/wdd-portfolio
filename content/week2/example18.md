---
title: ' Write a JavaScript function to get the number of occurrences of each letter in specified string.'
description: ''
input: 'Lorem Ipsum Dolum'
fnName: 'countChars'
---

```js
function countChars(string) {
    const chars = string.split('');
    const uniqueCharsCount = chars.reduce((obj, char) => {
        obj[char] = (obj[char] || 0) + 1;
        return obj;
    }, {});
    return JSON.stringify(uniqueCharsCount, null, 2);
}
```


