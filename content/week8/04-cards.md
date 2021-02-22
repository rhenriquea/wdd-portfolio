---
title: SVG Drawings
description: description
---

```html
<svg id="definitions">
  <defs>
    <symbol id="symbol1" viewBox="0 0 30 42">
      <rect width="30" height="42" />
    </symbol>
    <linearGradient id="EarthGradient">
      <stop class="earth1" offset="0%" />
      <stop class="earth2" offset="50%" />
      <stop class="earth3" offset="100%" />
    </linearGradient>
    <linearGradient id="MoonGradient">
      <stop class="moon1" offset="0%" />
      <stop class="moon2" offset="50%" />
      <stop class="moon3" offset="100%" />
    </linearGradient>
    <pattern
      id="pattern1"
      patternUnits="userSpaceOnUse"
      width="10"
      height="10"
      viewBox="10 3 10 20"
    >
      <rect
        x="10"
        y="10"
        rx="15"
        ry="15"
        width="10"
        height="10"
        fill="url(#EarthGradient)"
      ></rect>
      <rect x="10" y="10" rx="25" ry="25" width="5" height="5" fill="url(#MoonGradient)"></rect>
      <rect x="20" y="20" rx="15" ry="15" width="1" height="1" fill="white"></rect>

      <rect x="15" y="22" rx="5" ry="15" width="1" height="1" fill="white"></rect>

      <rect x="22" y="22" rx="5" ry="15" width="1" height="1" fill="white"></rect>
    </pattern>

    <pattern
      id="pattern2"
      patternUnits="userSpaceOnUse"
      width="10"
      height="10"
      viewBox="6.5 0 15 25"
    >
      <g>
        <circle cx="14" cy="15" r="10" id="circle" />

        <path
          id="heart"
          d="M17.93,17.12c-0.47,0-0.72,0.22-0.84,0.39c-0.12-0.17-0.37-0.39-0.84-0.39
          c-0.56,0-1.16,0.36-1.16,1.15c0,0.31,0.07,0.56,0.23,0.82c0.16,0.26,0.5,0.58,1,0.95c0.2,0.15,0.38,0.27,0.5,0.34
          c0.23,0.15,0.24,0.15,0.26,0.15c0,0,0,0,0,0c0.03,0,0.04-0.01,0.26-0.15c0.12-0.08,0.3-0.2,0.5-0.34c0.51-0.37,0.84-0.69,1-0.95
          c0.16-0.27,0.23-0.51,0.23-0.82C19.09,17.48,18.49,17.12,17.93,17.12z"
        />

        <polygon id="diamond" points="10.58,16.71 8.8,18.83 10.58,20.95 12.36,18.83 	" />

        <path
          id="spade"
          d="M12.58,12.43c0-0.6-0.48-0.9-0.92-1.16l-0.01,0c-0.09-0.06-0.18-0.11-0.26-0.16
            c-0.38-0.26-0.71-0.67-0.74-0.82c-0.01-0.03-0.03-0.05-0.07-0.05c-0.03,0-0.05,0.02-0.06,0.05c-0.04,0.15-0.33,0.54-0.75,0.81
            c-0.07,0.04-0.14,0.08-0.22,0.13c-0.43,0.25-0.97,0.57-0.96,1.2c0.01,0.78,0.52,1.13,0.99,1.13c0.31,0,0.61-0.14,0.83-0.39
            c-0.1,0.42-0.39,0.94-1.21,1.15c-0.03,0.01-0.06,0.04-0.05,0.07c0,0.03,0.03,0.06,0.07,0.06h2.75c0.04,0,0.07-0.03,0.07-0.06
            c0-0.03-0.02-0.06-0.05-0.06c-0.04-0.01-0.87-0.25-1.16-1.12c0.22,0.21,0.51,0.33,0.8,0.34C12.08,13.53,12.57,13.19,12.58,12.43z
            "
        />

        <path
          id="club"
          d="M18.2,11.68c0.04-0.11,0.06-0.23,0.06-0.35c0-0.62-0.52-1.13-1.16-1.13c-0.64,0-1.16,0.51-1.16,1.13
          c0,0.12,0.02,0.24,0.06,0.35c-0.62,0.02-1.12,0.52-1.12,1.13c0,0.62,0.52,1.13,1.16,1.13c0.3,0,0.57-0.11,0.77-0.29l-0.25,0.82
          h1.06l-0.25-0.83c0.21,0.18,0.48,0.3,0.78,0.3c0.64,0,1.16-0.51,1.16-1.13C19.31,12.2,18.82,11.71,18.2,11.68z"
        />
      </g>
    </pattern>
  </defs>
</svg>

<div style="display: flex">
  <figure>
    <figcaption>Card Universe (own)</figcaption>
    <div class="card-shadow">
      <svg width="300" height="420" id="card1">
        <use xlink:href="#symbol1" fill="url(#pattern1)" />
      </svg>
    </div>
  </figure>
  <figure>
    <figcaption>Card Example 2 (using svg icons from web)</figcaption>
    <div class="card-shadow">
      <svg width="300" height="420" id="card2">
        <use xlink:href="#symbol1" fill="url(#pattern2)" />
      </svg>
    </div>
  </figure>
</div>
```
