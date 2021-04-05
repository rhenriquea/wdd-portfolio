<template>
  <div>
    <h1>Arrays and Functions</h1>
    <h2>What is an Array?</h2>
    <p>An array is a special variable, which can hold more than one value at a time.</p>
    <h2>Most useful array functions</h2>
    <figure>
      <img
        class="img-responsive"
        src="images/arrays.png"
        height="500"
        alt="Array functions definitions"
      />
    </figure>
    <h2>JavaScript functions examples</h2>
    <hr />
    <ol>
      <li v-for="example in examples">
        <p>{{ example.title }}</p>
        <small>{{ example.description }}</small>
        <div class="input">
          <small>Input:</small>
          <div v-if="Array.isArray(example.input) && example.input.length > 1">
            {{ `${example.input[0]}, ${example.input[1]}` }}
          </div>
          <div v-else>{{ example.input }}</div>
        </div>
        <nuxt-content :document="example"></nuxt-content>
        <div class="result">
          <small>Result</small>
          <div>{{ getOutput(example.fnName, example.input) }}</div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import {
  reverseNumber,
  checkPalindrome,
  stringCombinations,
  alphabetOrder,
  uppercase,
  findLongestWord,
  vowelCount,
  isPrime,
  getDataType,
  matrix,
  secondGreatestLowest,
  isPerfectNumber,
  factors,
  amountTocoins,
  exponencial,
  uniqueChar,
  countChars,
  binarySearch,
  minimumValue,
  createId,
  getSubsets,
  getCharOccurrence,
  findFirstNotRepeatedChar,
  decrescentSort,
  longestName,
  longestSubstringWithNoRepeatedChars,
  isPalindrome,
  longestPalindrome,
} from './exercises';

export default {
  layout: 'reading',
  async asyncData({ $content }) {
    const examples = await $content('week2').sortBy('slug').fetch();
    return { examples };
  },
  methods: {
    reverseNumber,
    checkPalindrome,
    stringCombinations,
    alphabetOrder,
    uppercase,
    findLongestWord,
    vowelCount,
    isPrime,
    getDataType,
    matrix,
    secondGreatestLowest,
    isPerfectNumber,
    factors,
    amountTocoins,
    exponencial,
    uniqueChar,
    countChars,
    binarySearch,
    minimumValue,
    createId,
    getSubsets,
    getCharOccurrence,
    findFirstNotRepeatedChar,
    decrescentSort,
    longestName,
    longestSubstringWithNoRepeatedChars,
    isPalindrome,
    longestPalindrome,

    getOutput(fn, input) {
      if (Array.isArray(input) && input.length > 1) {
        return this[fn](input[0], input[1]);
      }
      return this[fn](input);
    },
  },
};
</script>

<style lang="scss">
figure {
  margin: 0 auto;
  max-width: 500px;
}

main h1 {
  border-bottom: 1px solid #cecece;
  margin-bottom: 15px;
  padding-bottom: 15px;
}

p {
  font-weight: 300;
  margin: 0;
  margin-bottom: 15px;
}

ol {
  margin-top: 15px;
}

ol li {
  font-weight: bold;
}
li > * {
  font-weight: 300;
  margin: 0;
}

.result {
  background-color: #f0ffff;
  border: 1px dotted #14a912;
  border-radius: 5px;
  color: #14a912;
  margin-bottom: 15px;
  padding: 20px 10px;
}

.input {
  background-color: #f0ffff;
  border: 1px dotted #121ca9;
  border-radius: 5px;
  color: #121ca9;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 20px 10px;
}
</style>
