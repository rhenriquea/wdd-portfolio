---
title: Classes
description: Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 classalike semantics.
---

```js{1,3-5}[Company.js]
class Company {
  constructor(id, name, employers, streetName, streetNumber, zipCode) {
    this.id = id;
    this.name = name
    this.employers = employers
    this.streetName = streetName
    this.streetNumber = streetNumber
    this.zipCode = zipCode
  }

  get address() {
    return `${this.streetName}, ${this.streetNumber} ${this.zipCode}`;
  }
}
```
