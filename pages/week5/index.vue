<template>
  <div>
    <h1>Javascript Test Types</h1>
    <p>In general, most projects use the following test types:</p>

    <div v-for="example in examples">
      <h3>{{ example.title }}</h3>
      <p>{{ example.description }}</p>
      <strong class="mt">Example</strong>
      <nuxt-content :document="example"></nuxt-content>
    </div>

    <h2>Test Tools Types</h2>
    <p>
      Below there is a list of tools that are divided in functionalities. Some providing with only
      one functionality, and some providing with a combination. This may come handy:
    </p>

    <ol>
      <li>
        <strong>Test launchers -</strong> Used to launch your tests in the browser or Node.js with
        user config. (<a href="https://karma-runner.github.io/">Karma</a>,
        <a href="http://jasmine.github.io/">Jasmine</a>,
        <a href="https://facebook.github.io/jest/">Jest</a>,
        <a href="https://github.com/DevExpress/testcafe">TestCafe</a>,
        <a href="https://www.cypress.io/">Cypress</a>,
        <a href="https://webdriver.io/">webdriverio</a>)
      </li>
      <li>
        <strong>Testing structure providers - </strong>Help you arrange your tests in a readable and
        scalable way. (<a href="https://mochajs.org/">Mocha</a>,
        <a href="http://jasmine.github.io/">Jasmine</a>,
        <a href="https://facebook.github.io/jest/">Jest</a>,
        <a href="https://github.com/cucumber/cucumber-js">Cucumber</a>,
        <a href="https://github.com/DevExpress/testcafe">TestCafe</a>,
        <a href="https://www.cypress.io/">Cypress</a>)
      </li>
      <li>
        <strong>Assertion functions -</strong>Used to check if a test returns what you expect it to
        return and if its’t it throws a clear exception. (<a href="http://chaijs.com/">Chai</a>,
        <a href="http://jasmine.github.io/">Jasmine</a>,
        <a href="https://facebook.github.io/jest/">Jest</a>,
        <a href="http://unexpected.js.org">Unexpected</a>,
        <a href="https://github.com/DevExpress/testcafe">TestCafe</a>,
        <a href="https://www.cypress.io/">Cypress</a>)
      </li>
      <li>
        <strong>Generate and display test progress and summary.</strong> (<a
          href="https://mochajs.org/"
          >Mocha</a
        >, <a href="http://jasmine.github.io/">Jasmine</a>,
        <a href="https://facebook.github.io/jest/">Jest</a>,
        <a href="https://karma-runner.github.io/">Karma</a>,
        <a href="https://github.com/DevExpress/testcafe">TestCafe</a>,
        <a href="https://www.cypress.io/">Cypress</a>)
      </li>
      <li>
        <strong>Mocks, spies, and stubs - </strong>Used to simulate tests scenarios, isolate the
        tested part of the software from other parts, and attach to processes to see they work as
        expected. (<a href="http://sinonjs.org/">Sinon</a>,
        <a href="http://jasmine.github.io/">Jasmine</a>,
        <a href="http://airbnb.io/enzyme/docs/api/">enzyme</a>,
        <a href="https://facebook.github.io/jest/">Jest</a>,
        <a href="https://testdouble.com/">testdouble</a>)
      </li>
      <li>
        <strong>Snapshot generators - </strong>Generate and compare snapshots to make sure changes
        to data structures from previous test runs are intended by the user’s code changes. (<a
          href="https://facebook.github.io/jest/"
          >Jest</a
        >, <a href="https://github.com/avajs/ava">Ava</a>)
      </li>
      <li>
        <strong>Code coverage - </strong> Reports of how much of your code is covered by tests. (<a
          href="https://gotwarlost.github.io/istanbul/"
          >Istanbul</a
        >, <a href="https://facebook.github.io/jest/">Jest</a>,
        <a href="http://blanketjs.org/">Blanket</a>)
      </li>
      <li>
        <strong>Browser Controllers - </strong>Used to simulate user actions for Functional Tests.
        (<a href="http://nightwatchjs.org">Nightwatch</a>,
        <a href="http://www.nightmarejs.org/">Nightmare</a>,
        <a href="http://phantomjs.org/">Phantom</a><strong>, </strong
        ><a href="https://github.com/GoogleChrome/puppeteer">Puppeteer</a>,
        <a href="https://github.com/DevExpress/testcafe">TestCafe</a>,
        <a href="https://www.cypress.io/">Cypress</a>)
      </li>
      <li>
        <strong>Visual Regression Tools - </strong>Used to compare your site to its previous
        versions visually by using image comparison techniques.<br />(<a
          href="https://applitools.com/"
          >Applitools</a
        >, <a href="https://percy.io/">Percy</a>,
        <a href="http://bbc-news.github.io/wraith/">Wraith</a>,
        <a href="https://github.com/webdriverio-boneyard/webdrivercss">WebdriverCSS</a>)
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  layout: 'reading',
  /* eslint-disable no-alert */
  async asyncData({ $content }) {
    const examples = await $content('week5').sortBy('slug').fetch();
    return { examples };
  },
};
</script>

<style lang="scss" scoped>
main h1 {
  border-bottom: 1px solid #cecece;
  margin-bottom: 15px;
  padding-bottom: 15px;
}
</style>
