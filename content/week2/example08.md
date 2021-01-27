---
title: 'Write a JavaScript function that accepts a number as a parameter and check the number is prime or not'
description: 'Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than
1 and itself.'
input: 37
fnName: 'isPrime'
---

```js
function isPrime(n) {
    if (n === 1) return false;

    if (n === 2) return true;

    for (let x = 2; x < n; x++) {
        if (n % x === 0) {
            return false;
        }
    }
    return true;
}
```


