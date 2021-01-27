---
title: 'Write a function for searching JavaScript arrays with a binary search.'
description: 'A binary search searches by splitting an array into smaller and smaller chunks until it finds the
desired value.'
input: [[1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6]
fnName: 'binarySearch'
---

```js
function binarySearch(lookupArray, searchEl) {
    const middlePosition = Math.floor(lookupArray.length / 2);

    if (lookupArray[middlePosition] === searchEl) {
        return middlePosition;
    }

    if (lookupArray.length === 1) {
        return null;
    }

    if (lookupArray[middlePosition] < searchEl) {
        const arr = lookupArray.slice(middlePosition + 1);
        const res = binarySearch(arr, searchEl);
        return res === null ? res : middlePosition + 1 + res;
    }

    const newArray = lookupArray.slice(0, middlePosition);
    return binarySearch(newArray, searchEl);
}
```


