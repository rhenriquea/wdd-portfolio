---
title: Testing Structure
description: Refers to the organization of your tests. Nowadays, tests are usually organized in a BDD structure that supports behavior-driven development (BDD). It often something like this
---

```js
describe('calculator', function() {
  // describes a module with nested "describe" functions
  describe('add', function() {
    // specify the expected behavior
    it('should add 2 numbers', function() {
       //Use assertion functions to test the expected behavior
       ...  
    })
  })
})
```
