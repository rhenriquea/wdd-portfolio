---
title: Fetch Example
description: description
---

```js
fetch('https://api.imgflip.com/get_memes')
  .then(response => response.json())
  .then(data => data.memes));
```
