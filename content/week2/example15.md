---
title: 'Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept
b and n from the user and display the result.'
description: ''
input: [2, 3]
fnName: 'exponencial'
---

```js
function exponencial(base, n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = base * ans;
    }
    return ans;
}
```


