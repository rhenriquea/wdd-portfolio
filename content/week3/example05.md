```html
<button id="btn2">Remove Event from "AddEventListener Example</button>
```

```js

// Same function applied before
const showId = function (event) {
    alert(`The id attribute from this button is ${event.srcElement.id}`);
}

function removeEvent() {
    const btn = document.getElementById('btn2');
    btn.removeEventListener('click', showId, false);
    alert('Event removed. Click on the "AddEventListener Example" again')
}
```
