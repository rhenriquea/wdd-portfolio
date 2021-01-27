---
title: 'Write a JavaScript function which accepts an argument and returns the type.'
description: 'Note: There are six possible values that typeof returns: object, boolean, function, number, string, and
undefined.'
input: false
fnName: 'getDataType'
---

```js
function getDataType(value) {
    const dtypes = [Function, RegExp, Number, String, Boolean, Object];
    const typesLength = dtypes.length;

    if (typeof value === 'object' || typeof value === 'function') {
        for (let idx = 0; idx < typesLength; idx++) {
            if (value instanceof dtypes[idx]) {
                return dtypes[idx];
            }
        }
    }

    return typeof value;
}
```


