---
title: 'Write a JavaScript function that generates all combinations of a string.'
description: ''
input: 'dog'
fnName: 'stringCombinations'
---

```js
function stringCombinations(string) {
    const combinations = [];
    const characters = string.split('') || [];
    let temp = '';
    const substringsLength = Math.pow(2, characters.length);
    for (let i = 0; i < substringsLength; i++) {
        temp = '';

        for (let j = 0; j < characters.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += characters[j];
            }
        }

        if (temp !== '') {
            combinations.push(temp);
        }
    }
    return combinations.join('\n');
}
```


