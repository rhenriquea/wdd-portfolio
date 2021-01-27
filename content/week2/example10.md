---
title: ' Write a JavaScript function which returns the n rows by n columns identity matrix..'
description: 'Note: There are six possible values that typeof returns: object, boolean, function, number, string, and
undefined.'
input: 4
fnName: 'matrix'

---

```js
function matrix(n) {
    let m = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                m += ' 1 ';
            } else {
                m += ' 0 ';
            }
        }
        m += '\n ---------- \n';
    }
    return m;
}
```


