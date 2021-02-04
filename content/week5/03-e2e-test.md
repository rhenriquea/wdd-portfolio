---
title: End-to-end Tests
description: Used to test how scenarios function on the product itself, by controlling the browser or the website. These tests usually ignore the internal structure of the application entirety and look at them from the eyes of the user like on a black box.
---

```js
Go to page "https://localhost:3303"

Type "test-user" in the field "#username"

Type "test-pass" in the field "#password"

Click on "#login"

Expect Page Url to be https://localhost:3303/dashboard

Expect "#name" to be "test-name"
```
