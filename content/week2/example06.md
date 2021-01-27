---
title: 'Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.'
description: ''
input: 'Web Development Tutorial'
fnName: 'findLongestWord'
---

```js
function findLongestWord(string) {
    const splitedSentence = string.match(/\w[a-z]{0,}/gi);
    let result = splitedSentence[0];

    for (let idx = 1; idx < splitedSentence.length; idx++) {
        if (result.length < splitedSentence[idx].length) {
            result = splitedSentence[idx];
        }
    }

    return result;
}
```


