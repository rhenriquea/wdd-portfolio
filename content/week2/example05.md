---
title: 'Write a JavaScript function that accepts a string as a parameter and converts the first letter of each
word of the string in upper case.'
description: ''
input: 'the quick brown fox'
fnName: 'uppercase'
---

```js
function uppercase(string) {
    const splittedString = string.split(' ');
    const uppercaseString = [];

    for (let x = 0; x < splittedString.length; x++) {
        const firstChar = splittedString[x].charAt(0).toUpperCase();
        const nextChar = splittedString[x].slice(1);
        uppercaseString.push(`${firstChar}${nextChar}`);
    }
    return uppercaseString.join(' ');
}
```


