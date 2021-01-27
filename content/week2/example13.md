---
title: 'Write a JavaScript function to compute the factors of a positive integer.'
description: ''
input: 16
fnName: 'factors'

---

```js
function factors(n) {
    let numFactors = [];
    const squared = Math.floor(Math.sqrt(n));

    for (let i = 1; i <= squared; i += 1)
        if (n % i === 0) {
            numFactors.push(i);
            if (n / i !== i) {
                numFactors.push(n / i);
            }
        }

    numFactors.sort((a, b) => a - b);

    return numFactors;
}
```


