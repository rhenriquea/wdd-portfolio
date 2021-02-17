<template>
  <div>
    <h1>Higher-order Functions in Javascript</h1>
    <small>
      The notes this week is based on a short explanation on closures, callbacks, and how to access
      an unspecified number of arguments in a higher-order function with the spread operator
    </small>
    <h2 class="mb">First class functions</h2>
    <p>
      A
      <a href="https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function"
        >first-class function</a
      >
      is a function that is treated like any other variable. This concept allows functions in
      Javascript to be accepted as an argument to another function, returned by another enclosing
      function, or even assigned as the value of a variable. In Javascript, functions are treated as
      objects. This is necessary in order to create higher-order functions.
    </p>
    <h2>Closures</h2>
    <p>
      A closure is how functions in Javascript can remember and access its surrounding state (or
      lexical environment). Closures are created whenever a function accesses a variable defined
      outside of its own scope. See the example below of a closure:
    </p>
    <nuxt-content :document="examples[0]"></nuxt-content>
    <p>
      In the global scope of the snippet, there is a global variable,
      <code class="hl">globalVar</code>, that is declared and instantiated with a value of
      <code class="hl">“xyz”</code>. <code class="hl">outerFunc</code> is an IIFE — an
      <a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
        >immediately invoked function expression</a
      >
      — that accepts the parameter of <code class="hl">outerArg</code> on line 2 and is invoked with
      the argument of <code class="hl">123</code> on line 12. Within
      <code class="hl">outerFunc</code>, a variable is declared, <code class="hl">outerVar</code>,
      and instantiated with the value of <code class="hl">‘a’</code>.
      <code class="hl">outerFunc</code> also includes <code class="hl">innerFunc</code>.<code
        class="hl"
        >innerFunc</code
      >
      is also an IIFE that accepts the parameter of
      <code class="hl">innerArg</code> on line 4 and is invoked with the argument
      <code class="hl">456</code> on line 11. Within <code class="hl">innerFunc</code>, it declares
      and instantiates a variable, <code class="hl">innerVar</code>, with the value of
      <code class="hl">‘b’</code>. Inside <code class="hl">innerFunc</code>, it logs each of the
      variable values.
    </p>

    <p>
      <code class="hl">innerFunc</code> acts as a closure here. As you can see from the logs
      (delineated by <code class="hl">//</code> above), <code class="hl">innerFunc</code> can access
      the value of every variable in this snippet. <code class="hl">innerFunc</code> creates its own
      scope and can access <code class="hl">innerVar</code> within this scope, but can
      <strong class="ir ko"><em>also </em></strong>access variables in its enclosing scope,
      <code class="hl">outerFunc</code>, as well as any globally declared variables (<code
        class="hl"
        >globalVar</code
      >). Basically, inner closures can always look outward, but the reverse is <em>not</em> true.
    </p>

    <h2 class="mb">Higher-order Functions</h2>
    <p>
      Simply put, a
      <a href="https://eloquentjavascript.net/05_higher_order.html">higher-order function</a>
      is just a first-class function that can accept another function as an argument
      <strong> <em>and/or</em> </strong> returns a function. A common example of a higher-order
      function is when a function accepts a second function (either named or anonymous) as an
      argument. The function passed in as an argument is also known as a
      <a href="https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"
        >callback function</a
      >.
    </p>

    <span class="important">
      When a callback function is invoked within your enclosing function and needs access to an
      outer variable, closures are created.
    </span>

    <nuxt-content :document="examples[1]"></nuxt-content>

    <p>
      In the above snippet, lines 1–3 declare the function
      <code class="hl">hello</code>. In the function declaration for
      <code class="hl">start</code> on line 4, we pass in <code class="hl">callback</code> as a
      parameter. On line 7, <code class="hl">start</code> is invoked and the function
      <code class="hl">hello</code> is passed in as the argument. <code class="hl">start</code> logs
      <code class="hl">“hello world”</code> when invoked because <code class="hl">hello</code> acts
      as a callback, which will itself be invoked within <code class="hl">start</code> (see line 2).
    </p>

    <h2 class="mb">Implementing an Advanced Higher-order Function</h2>

    <p>
      The below snippet will create a higher-order function, <code class="hl">logger</code>, that
      will accept a callback function. The function should log the <em>callback</em> function’s
      arguments (<strong><em>not</em></strong
      ><em> </em> <code class="hl">logger</code>’s arguments); evaluate the return value of the
      callback function; and finally, log the return value of the callback function.
    </p>

    <p>
      There are three functions that will serve as exemplary callback functions for
      <code class="hl">logger</code>: <code class="hl">add</code>, <code class="hl">square</code>,
      and <code class="hl">sumArray</code>. These functions each evaluate a mathematical equation
      based on the parameters supplied. To invoke the higher-order function,
      <code class="hl">logger</code>, a variable declaration is made (see lines 12-14 below) and the
      value is a function expression (i.e. <code class="hl">logger(add)</code>). By using our
      higher-order function, the function expression can accept a callback function.
    </p>

    <p>
      <code class="hl">logger</code> fulfills the requirements of a higher-order function: it
      accepts a function as a callback and will <strong>also</strong> return a function that will
      evaluate the callback function. Also remember, <code class="hl">logAdd</code>,
      <code class="hl">logSquare</code>, and <code class="hl">logSum</code> will each create their
      own closure when invoked; they share the same reference to the
      <code class="hl">logger</code> function but will create different lexical environments.
    </p>

    <strong>Starter Code:</strong>
    <nuxt-content :document="examples[2]"></nuxt-content>

    <p>
      When approaching this problem, first consider what’s happening in the variable declarations on
      lines 12–14. On line 16
      <code class="hl">logAdd(1, 2)</code> will invoke <code class="hl">add</code> with the
      arguments of <code class="hl">1</code> and <code class="hl">2</code> within
      <code class="hl">logger</code>:<code class="hl">logger(add(1, 2))</code>. By contextualizing
      the expected functionality, we see that the main obstacle is that the
      <code class="hl">add</code> function within <code class="hl">logger</code> needs to have
      access to the arguments that will be passed in to <code class="hl">logAdd</code>. However,
      <code class="hl">logger</code> also needs to be abstract enough to accept any number of
      arguments so that it can also successfully evaluate any callback. While
      <code class="hl">logAdd</code> requires two arguments, <code class="hl">logSum</code> requires
      an array.
    </p>

    <span class="important">
      Inner functions can always look <em> outwards</em> to their enclosing scope.
    </span>

    <h3>Accessing Unknown Number of Arguments</h3>

    <p>
      The <code class="hl">combined</code> function below can handle accepting an unknown number of
      arguments. (Later we can abstract the inner functionality into a callback.)
      <code class="hl">combined</code>’s arguments will be passed to an inner function that expects
      a specific number of arguments. It requires two arguments that are numbers.
    </p>

    <p>In pseudocode:</p>

    <nuxt-content :document="examples[3]"></nuxt-content>

    <p>
      First is included the functionality of <code class="hl">add</code> as the return value of
      <code class="hl">combined</code>.
    </p>

    <nuxt-content :document="examples[4]"></nuxt-content>

    <p>
      In order to give the anonymous arrow function (lines 2-4) access to
      <code class="hl">combined</code>’s parameters, we utilize an IIFE. The argument that is passed
      in on line 4 would match that of line 1 in the above snippet.
    </p>

    <span class="important mb">
      We can use the spread operator to give us access to an unknown number of arguments.
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
        >MDN docs</a
      >
    </span>

    <blockquote>
      “Spread syntax allows an iterable such as an array expression or string to be expanded in
      places where zero or more arguments (for function calls) or elements (for array literals) are
      expected…”
    </blockquote>

    <p>
      By implementing the spread operator in both our outer function’s parameters
      <em>and</em> when we immediately invoke the anonymous function expression, the inner function
      can access these variables without the outer function specifying how many to expect.
    </p>

    <nuxt-content :document="examples[5]"></nuxt-content>

    <h3>Refactoring with Callbacks</h3>

    <p>
      First, we no longer need to include the functionality of
      <code class="hl">add</code> as we did in <code class="hl">combined</code> above. The
      <code class="hl">callback</code> that we pass into <code class="hl">logger</code> will handle
      that. Second, we can expand the parameters of an enclosing, outer function so that an inner
      function can access zero or more arguments with the spread operator.
    </p>

    <nuxt-content :document="examples[6]"></nuxt-content>

    <p>
      In the above code snippet, lines 2 and 9 in
      <code class="hl">logger1</code> spread the arguments that <code class="hl">combined</code> was
      previously passing to its inner function explicitly. Here, we have to remember that
      <code class="hl">logAdd</code> will create a closure for
      <code class="hl">logger(add)</code>when invoked and <code class="hl">logAdd</code> will pass
      in the arguments for <code class="hl">logger</code>’s <code class="hl">callback</code>.The
      anonymous function (lines 2–6) gives <code class="hl">callback</code> access to
      <code class="hl">…args</code> by passing them in as the argument (line 2).
    </p>

    <h3>Sources</h3>

    <ul>
      <li>
        <p>
          MDN Web Docs:
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"
            >Object-oriented Javascript for beginners</a
          >,
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function"
            >First-class Function</a
          >,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">Closures</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"
            >Callback function</a
          >, <a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE">IIFE</a>,
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
            >Spread syntax</a
          >,
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"
            >arguments object</a
          >,
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"
            >Function.prototype.apply()</a
          >
        </p>
      </li>
      <li>
        <p>
          Javascript in Plain English:
          <a
            href="https://medium.com/javascript-in-plain-english/what-are-javascript-programming-paradigms-3ef0f576dfdb"
            >What are Javascript Programming Paradigms?</a
          >
        </p>
      </li>
      <li>
        <p>
          Code Burst:
          <a href="https://codeburst.io/imperative-vs-declarative-javascript-8b5e45a602dd"
            >Imperative vs Declarative Javascript</a
          >
        </p>
      </li>
      <li>
        <p>
          Launch School:
          <a
            href="https://medium.com/launch-school/javascript-weekly-an-introduction-to-first-class-functions-9d069e6fb137"
            >An Introduction to First-Class Functions</a
          >
        </p>
      </li>
      <li>
        <p>
          Eloquent Javascript:
          <a href="https://eloquentjavascript.net/05_higher_order.html">Higher-Order Functions</a>
        </p>
      </li>
      <li>
        <p>
          Bits and Pieces:
          <a
            href="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad"
            >Understanding Higher-Order Functions in Javascript</a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const examples = await $content('week7').sortBy('slug').fetch();
    return { examples };
  },
};
</script>
