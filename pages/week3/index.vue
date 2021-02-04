<template>
  <div>
    <h1>Week03</h1>
    <p>
      This week I will show some manipulation of events in the DOM and the difference between JS
      Classes and JS Objects.
    </p>

    <p>Find an example below &#128071;</p>

    <h2>Javascript Objects vs Javascript Classes</h2>
    <p>
      Although both may look very similar in the implementation, the concept of Classes and Objects
      in Javascript are very distinct.
    </p>

    <h3>Javascript Objects</h3>
    <blockquote>
      Basically, javaScript objects are containers for <strong>named values</strong> called
      properties or methods, and a <strong>method</strong> is a function stored as a property.
    </blockquote>
    <p>An example of Object would be:</p>
    <nuxt-content :document="examples[0]"></nuxt-content>

    <h3>Javascript Classes</h3>
    <p>
      ECMAScript 2015, also known as ES6, introduced JavaScript Classes. JavaScript Classes are
      templates for JavaScript Objects.
    </p>
    <blockquote>
      A JavaScript class is <strong>not</strong> an object. It is a <strong>template</strong> for
      JavaScript objects.
    </blockquote>

    <p>An example of Javascript Class would be:</p>
    <nuxt-content :document="examples[1]"></nuxt-content>

    <hr />
    <h2>What is an Event?</h2>
    <p>
      Every time that interaction happens with a web document, an event is triggered. The events can
      be even triggered by a browser or by a user. The javascript syntax is based on the event
      itself (mouseenter, mousemove, mousedown, mouseup, click, unload, load) with the addition of
      the prefix 'on' (onmouseenter, onmousemove, onmousedown, onmouseup, onclick, onunload, onload)
    </p>
    <h2>Event management</h2>
    <p>The main parts of an event management are:</p>

    <ul>
      <li>Handlers</li>
      <li>Triggers</li>
      <li>Default Handlers</li>
    </ul>
    <hr />
    <h3>Event Handlers</h3>
    <ul class="unstyled">
      <li>
        <p>
          The event handler is a function that is executed when an event is triggered. This handler
          should be attached to an HTML element that will be the trigger. Consider the following
          example:
        </p>

        <pre></pre>
        <nuxt-content :document="examples[2]"></nuxt-content>
        <button ref="btn1">Click this button</button>
      </li>
    </ul>
    <hr />
    <h4>addEventListener(event, function, boolean)</h4>
    <ul class="unstyled">
      <li>
        <p>
          This method allows you to attach an event to a DOM Node. The first param defines the event
          type, the second is the function tp be executed, in other words, the event handler, and
          the third event is a boolean that defines in which event propagation phase should occur.
        </p>

        <nuxt-content :document="examples[3]"></nuxt-content>
        <button ref="btn2" id="btn2">AddEventListener Example</button>
      </li>
    </ul>
    <h4>removeEventListener(event, function, boolean)</h4>
    <ul class="unstyled">
      <li>
        <p>
          This method allows you to dettach an event from a DOM Node. The first param defines the
          event type, the second is the function tp be executed, in other words, the event handler,
          and the third event is a boolean that defines in which event propagation phase should
          occur.
        </p>
        <p>
          Is the opposite from the addEventListener, if you click the button below, it will remove
          the previous event and the button won't listen to the click anymore unless you reload the
          page.
        </p>
        <p>Try to click in the button below, and then click on the "AddEventListener Example".</p>

        <nuxt-content :document="examples[4]"></nuxt-content>

        <button @click="removeEvent()">Remove Event from "AddEventListener Example"</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  /* eslint-disable no-alert */
  async asyncData({ $content }) {
    const examples = await $content('week3').sortBy('slug').fetch();
    return { examples };
  },
  mounted() {
    const { btn1, btn2 } = this.$refs;
    btn1.addEventListener('click', this.showAlert, false);
    btn2.addEventListener('click', this.showId, false);
  },
  methods: {
    showId(event) {
      alert(`The id attribute from this button is ${event.srcElement.id}`);
    },
    removeEvent() {
      const btn = document.getElementById('btn2');
      btn.removeEventListener('click', this.showId, false);
      alert('Event removed. Click on the "AddEventListener Example" again');
    },
    showAlert() {
      alert('Button clicked!');
    },
  },
};
</script>

<style lang="scss" scoped>
main h1 {
  border-bottom: 1px solid #cecece;
  margin-bottom: 15px;
  padding-bottom: 15px;
}

ul.unstyled {
  list-style: none;
}

li > * {
  font-weight: 300;
  margin: 0;
}

blockquote {
  background-color: #ffc;
  font-size: small;
  padding: 15px;
}

.editor {
  height: 650px;
  margin: 15px 0;
  width: 100%;
}

.ace_content {
  padding: 10px;
}

#editor1JS {
  height: 80px;
}

#editor2JS,
#editor3JS {
  height: 185px;
}

#editor4JS {
  height: 360px;
}
</style>
