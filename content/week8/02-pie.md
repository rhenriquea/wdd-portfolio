---
title: SVG Drawings
description: description
---

```html
<svg width="200" height="200">
  <!-- define pattern -->
  <defs>
    <pattern id="mypattern" patternUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
      <rect x="0" y="0" width="50" rx="10" ry="10" height="50" class="rectangle" />
      <circle cx="25" cy="25" r="8" fill="white" stroke="darkred" stroke-width="2" />
    </pattern>
  </defs>

  <!-- use pattern in a circle -->
  <circle cx="100" cy="100" r="100" fill="url(#mypattern)" stroke-width="1" stroke="black" />
</svg>
```
