---
title: Integration Tests
description: Used in processes across several units to achieve their goals, including their side effects
---

```js
const startCarButton = document.getElementById('start-car-button')

startCarButton.click()

assert(isStartCarCommandSent())

//or even
car.checkIfStartedViaBluetooth()
  .then(hasStarted => assert(hasStarted))
```
