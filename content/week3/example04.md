```html
<button id="btn1">AddEventListener Example</button>
```

```js
const showId = function (event) {
    alert(`The id attribute from this button is ${event.srcElement.id}`);
}

function eventListenerExample() {
    const btn = document.getElementById('btn1');
    btn.addEventListener('click', showId, false);
}
```
