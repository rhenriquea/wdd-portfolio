<template>
  <div>
    <h1>SVG Drawings and CSS Animations</h1>
    <small>
      On the notes this weeks I have followed some tutorials on how to use SVG and in the end I have
      created the back of two cards for a deck.</small
    >

    <section>
      <h2 class="mb">SVG Shapes</h2>

      <p><a href="https://codepen.io/rhenriquea/pen/RmYwKx">Source code</a></p>
      <small>
        The yellow circle example was retrieved from the
        <a href="https://www.w3schools.com/graphics/svg_intro.asp">W3C SVG Tutorial</a></small
      >

      <div>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
          Sorry, your browser does not support inline SVG.
        </svg>

        <svg class="birdcontainer" viewBox="0 0 200 200">
          <g id="bird">
            <g id="body">
              <path
                d="M48.42,78.11c0-17.45,14.14-31.58,31.59-31.58s31.59,14.14,31.59,31.58c0,17.44-14.14,31.59-31.59,31.59
                S48.42,95.56,48.42,78.11"
              />
              <path
                d="M109.19,69.88c0,0-8.5-27.33-42.51-18.53c-34.02,8.81-20.65,91.11,45.25,84.73
                c40.39-3.65,48.59-24.6,48.59-24.6S124.68,106.02,109.19,69.88"
              />
              <path
                id="wing"
                d="M105.78,75.09c4.56,0,8.84,1.13,12.62,3.11c0,0,0.01-0.01,0.01-0.01l36.23,12.38c0,0-13.78,30.81-41.96,38.09
                          c-1.51,0.39-2.82,0.59-3.99,0.62c-0.96,0.1-1.92,0.16-2.9,0.16c-15.01,0-27.17-12.17-27.17-27.17
                          C78.61,87.26,90.78,75.09,105.78,75.09"
              />
            </g>
            <g id="head">
              <path
                id="beak"
                d="M50.43,68.52c0,0-8.81,2.58-10.93,4.86l9.12,9.87C48.61,83.24,48.76,74.28,50.43,68.52"
              />
              <path
                class="eye-ball"
                d="M60.53,71.68c0-6.33,5.13-11.46,11.46-11.46c6.33,0,11.46,5.13,11.46,11.46c0,6.33-5.13,11.46-11.46,11.46
              C65.66,83.14,60.53,78.01,60.53,71.68"
              />
              <path
                id="pupil"
                d="M64.45,71.68c0-4.16,3.38-7.53,7.54-7.53c4.16,0,7.53,3.37,7.53,7.53c0,4.16-3.37,7.53-7.53,7.53
              C67.82,79.22,64.45,75.84,64.45,71.68"
              />
              <path
                class="eye-ball"
                d="M72.39,74.39c0-2.73,2.22-4.95,4.95-4.95c2.73,0,4.95,2.21,4.95,4.95c0,2.74-2.22,4.95-4.95,4.95
              C74.6,79.34,72.39,77.13,72.39,74.39"
              />
            </g>
          </g>
        </svg>

        <svg width="200" height="200">
          <!-- define pattern -->
          <defs>
            <pattern
              id="mypattern"
              patternUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="50"
              height="50"
            >
              <rect x="0" y="0" width="50" rx="5" ry="5" height="50" class="rectangle" />
              <circle cx="25" cy="25" r="8" fill="darkgreen" stroke="lightgreen" stroke-width="2" />
            </pattern>
          </defs>

          <!-- use pattern in a circle -->
          <circle cx="100" cy="100" r="50" fill="url(#mypattern)" stroke-width="1" stroke="black" />
        </svg>
      </div>
    </section>

    <section>
      <h2 class="mb">CSS Animations</h2>

      <p><a href="https://codepen.io/rhenriquea/pen/vqRRNL">Source code</a></p>
      <div class="animated-squares mb-2x">
        <div class="container container-one">
          <div class="orbiting-circle"></div>
        </div>
        <div class="container container-two">
          <div class="morphing-circle-square"></div>
        </div>
        <div class="container container-three">
          <div class="half-circle half-circle-left"></div>
          <div class="half-circle half-circle-right"></div>
        </div>
        <div class="container container-four">
          <div class="heartbeat-circle"></div>
        </div>
      </div>

      <div class="stage">
        <section class="stage__ligths">
          <section class="stage__title">
            <div class="stage__description">
              <h1>CSS SLIDING CURTAINS</h1>
              <p><a href="https://codepen.io/rhenriquea/pen/rEpmQg">Source code</a></p>
            </div>
          </section>

          <div class="curtain left">
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
          </div>
          <div class="curtain right">
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
            <div class="curtain__node"></div>
          </div>
        </section>
      </div>
    </section>

    <h3>Sources</h3>
    <ul>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial">SVG: Getting started</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Patterns"
          >SVG Patterns: MDN Web Docs</a
        >
      </li>
      <li>
        <a href="https://www.w3schools.com/graphics/svg_intro.asp">W3C SVG Tutorial</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const examples = await $content('week8').sortBy('slug').fetch();
    return { examples };
  },
};
</script>

<style lang="scss" scoped>
#definitions {
  position: absolute;
  z-index: -600;
}

figcaption {
  color: #191970;
  font-family: 'Arial Black', sans-serif;
  margin-bottom: 15px;
}

#card1 {
  background-color: #000;
  border-radius: 5px;
  box-shadow: inset 0 0 12px 10px #191970;
}

.earth1 {
  stop-color: #ff0;
  stop-opacity: 0.6;
}
.earth2 {
  stop-color: #00f;
  stop-opacity: 0.5;
}
.earth3 {
  stop-color: #00008b;
  stop-opacity: 0.6;
}

.moon1 {
  stop-color: #f5f5f5;
  stop-opacity: 0.6;
}
.moon2 {
  stop-color: #808080;
}
.moon3 {
  stop-color: #000;
  stop-opacity: 0.6;
}

#card2 {
  background-color: #4682b4;
  border-radius: 5px;
  box-shadow: inset 0 0 0 5px #191970;
  fill: url('#Gradient1');
}

.card-shadow {
  border-radius: 5px;
  box-shadow: 5px 5px 10px #000;
  height: 420px;
  width: 300px;
}

#circle {
  fill: #191970;
}

#spade,
#heart {
  fill: #f00;
}

#diamond,
#club {
  fill: #fff;
}

.birdcontainer {
  height: 200px;
  width: 200px;
}
.birdcontainer svg {
  background-color: #fff;
}
#wing {
  fill: #81ccaa;
}
#body {
  fill: #b8e4c2;
}
#pupil {
  fill: #1f2600;
}
#beak {
  fill: #f69c0d;
}
.birdcontainer .eye-ball {
  fill: #fefff5;
}

.rectangle {
  fill: #008b00;
  opacity: 0.5;
  stroke: #000;
  stroke-width: 5;
}

.container {
  background-color: #008080;
  height: 150px;
  width: 150px;

  &-two {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  &-three {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  }

  &-four {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .orbiting-circle {
    animation: orbit 3s linear infinite;
    background-color: #dc143c;
    border-radius: 50%;
    height: 25%;
    margin: 5%;
    width: 25%;
  }

  .morphing-circle-square {
    animation: morphing-circle-square 3s linear infinite;
    background-color: #8b0000;
    border-radius: 50%;
    height: 25%;
    width: 25%;
  }

  .half-circle {
    height: 25%;
    overflow: hidden;
    width: 12.5%;

    &-left {
      animation: half-circle-left 2s ease-in-out infinite;

      &::before {
        background-color: #dc143c;
        border-radius: 50%;
        content: '';
        display: block;
        height: 100%;
        transform: translate3d(0, 0, 0);
        width: 200%;
      }
    }

    &-right {
      animation: half-circle-right 2s ease-in-out infinite;

      &::before {
        background-color: #dc143c;
        border-radius: 50%;
        content: '';
        display: block;
        height: 100%;
        transform: translate3d(-50%, 0, 0);
        width: 200%;
      }
    }
  }

  .heartbeat-circle {
    animation: 0.8s infinite heartbeat-circle;
    background-color: #dc143c;
    border-radius: 50%;
    height: 25%;
    width: 25%;
  }
}
.animated-squares {
  align-items: center;
  display: flex;
  justify-content: space-around;
}

// ANIMATIONS
@keyframes orbit {
  0% {
    transform: translate3d(0, 0, 0);
  }
  5% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(260%, 0, 0);
  }
  30% {
    transform: translate3d(260%, 0, 0);
  }
  50% {
    transform: translate3d(260%, 260%, 0);
  }
  55% {
    transform: translate3d(260%, 260%, 0);
  }
  75% {
    transform: translate3d(0, 260%, 0);
  }
  80% {
    transform: translate3d(0, 260%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes morphing-circle-square {
  0% {
    border-radius: 50%;
  }
  25% {
    background-color: #8b0000;
    /*(if you don't add both red and circle here it will start changing one or the other before you are ready) */
    border-radius: 50%;
  }
  50% {
    background-color: #fff;
    /* now change to white square...but don't start rotating yet! */
    border-radius: 0%;
    transform: rotate(0deg);
  }
  75% {
    background-color: #fff;
    /* stay a white square, but rotate 90deg */
    border-radius: 0%;
    transform: rotate(90deg);
  }
  100% {
    background-color: #8b0000;
    /* stay rotated at 90, but change back to a circle */
    border-radius: 50%;
    transform: rotate(90deg);
  }
}

@keyframes half-circle-left {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(-55%, 0, 0);
  }
  50% {
    transform: translate3d(-50%, 0, 0);
  }
  75% {
    transform: translate3d(-50%, 0, 0);
  }
  25% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes half-circle-right {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(55%, 0, 0);
  }
  50% {
    transform: translate3d(50%, 0, 0);
  }
  75% {
    transform: translate3d(50%, 0, 0);
  }
  25% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes heartbeat-circle {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

// General page hover controller
.stage {
  &__ligths {
    background: #000;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  &__title {
    display: table;
    height: 100vh;
    text-align: center;
    width: 100%;
  }
  &__description {
    color: #000;
    display: table-cell;
    transition: color 3s ease;
    vertical-align: middle;
    &:hover {
      color: #fff;
    }
  }

  // curtains open animations triggers
  &:hover {
    div {
      &.curtain {
        &.right {
          transform: scaleX(0);
          transform: scaleX(0);
          transform-origin: 120% bottom;
          transform-origin: 120% bottom;
        }
        &.left {
          transform: scaleX(0);
          transform: scaleX(0);
          transform-origin: -120% top;
          transform-origin: -120% top;
        }
      }
    }
  }
}

// Curtains styles
.curtain {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: -10%;
  transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: -webkit-transform 6s ease;
  transition: transform 6s ease;
  transition: transform 6s ease, -webkit-transform 6s ease;
  width: 100%;

  // Original position animation
  &.left {
    transform-origin: -120% top;
    transform-origin: -120% top;
  }

  &.right {
    left: 50%;
    transform-origin: 120% top;
    transform-origin: 120% top;
  }

  // Curtain nodes
  &__node {
    animation: curtainNode 2s ease infinite;
    animation: curtainNode 2s ease infinite;
    background: repeating-linear-gradient(
      to left,
      #b22222 2vw,
      darken(#b22222, 30) 4vw,
      lighten(#b22222, 30) 5vw
    );
    background-size: 100% 100%;
    display: inline-block;
    height: 120vh;
    transform: rotate(3deg);
    transform: rotate(3deg);
    transform-origin: 0 0%;
    transform-origin: 0 0%;
    width: 5vw;

    // styles for the curtain nodes
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: (-0.1s * $i);
        animation-delay: (-0.1s * $i);
      }
    }
  }
}

// Swing effect keyframes
@keyframes curtainNode {
  50% {
    transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
}
@keyframes curtainNode {
  50% {
    transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
}
</style>
