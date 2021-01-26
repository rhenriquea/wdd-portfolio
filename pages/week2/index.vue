<template>
  <div>
    <h1>Week02</h1>
    <p>
      This week we will describe the basic definitions of a function and what are javascript arrays
    </p>

    <p>Find an example below &#128071;</p>

    <h1>Arrays and Functions</h1>
    <h2>What is an Array?</h2>
    <p>An array is a special variable, which can hold more than one value at a time.</p>
    <h2>Most useful array functions</h2>
    <figure>
      <img
        class="img-responsive"
        src="images/arrays.png"
        width="500"
        height="auto"
        alt="Array functions definitions"
      />
    </figure>

    <client-only>
      <div>
        <h2>JavaScript functions examples</h2>

        <ol>
          <li v-for="(editor, i) of editors">
            <FunctionDebugger :editor="editor" :index="i">
              <template v-slot:title>
                <p>
                  {{ editor.title }}
                </p>
              </template>
              <template v-slot:subtitle>
                <small>
                  {{ editor.subtitle }}
                </small>
              </template>
            </FunctionDebugger>
          </li>
        </ol>
      </div>
    </client-only>
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
  longestPalindrome,
  functionDefs,
} from '../../utils/exercisesFunctions';

import FunctionDebugger from '../../components/FunctionDebugger.vue';

export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js',
          integrity:
            'sha512-GZ1RIgZaSc8rnco/8CXfRdCpDxRCphenIiZ2ztLy3XQfCbQUSCuk8IudvNHxkRA3oUg6q0qejgN/qqyG1duv5Q==',
          crossorigin: 'anonymous',
        },
      ],
    };
  },
  components: {
    FunctionDebugger,
  },
  data: () => ({
    editors: [
      {
        title: 'Write a JavaScript function that reverse a number',
        subtitle: ``,
        input: 32243,
        callback: reverseNumber,
      },
      {
        title: `Write a JavaScript function that checks whether a passed string is palindrome or not.`,
        subtitle: `A palindrome is word, phrase, or sequence that reads the same backward as forward,
              e.g., madam or nurses run.`,
        input: 'madam',
        callback: checkPalindrome,
      },
      {
        title: `Write a JavaScript function that returns a passed string with letters in alphabetical
              order.`,
        subtitle: `Assume punctuation and numbers symbols are not included in the passed string.`,
        callback: stringCombinations,
        input: 'dog',
      }, // #3
      {
        title: `Write a JavaScript function that returns a passed string with letters in alphabetical
              order.`,
        subtitle: `Assume punctuation and numbers symbols are not included in the passed string.`,
        callback: alphabetOrder,
        input: 'webmaster',
      }, // #4
      {
        title: ` Write a JavaScript function that accepts a string as a parameter and find the longest
              word within the string.`,
        subtitle: '',
        callback: uppercase,
        input: 'the quick brown fox',
      }, // #5
      {
        title: ` Write a JavaScript function that accepts a string as a parameter and counts the number
              of vowels within the string.`,
        subtitle: `Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count
                'y' as vowel here.`,
        callback: findLongestWord,
        input: 'Web Development Tutorial',
      }, // #6
      /*   { callback: vowelCount, input: 'The quick brown fox' }, // #7
      { callback: isPrime, input: 37 }, // #8
      { callback: getDataType, input: false }, // #9
      { callback: matrix, input: 4 }, // #10
      { callback: secondGreatestLowest, input: [1, 2, 3, 4, 5] }, // #11
      { callback: isPerfectNumber, input: 28 }, // #12
      { callback: factors, input: 16 }, // #13
      { callback: amountTocoins, input: [46, [25, 10, 5, 2, 1]] }, // #14
      { callback: exponencial, input: [2, 3] }, // #15
      { callback: uniqueChar, input: 'thequickbrownfoxjumpsoverthelazydog' }, // #16
      { callback: countChars, input: 'Lorem Ipsum Dolum' }, // #17
      {
        callback: binarySearch,
        input: [[1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6],
      }, // #18
      { callback: minimumValue, input: [[11, 45, 4, 31, 64, 10], 10] }, // #19
      { callback: createId, input: 8 }, // #20
      { callback: getSubsets, input: [[1, 2, 3], 2] }, // #21
      { callback: getCharOccurrence, input: ['w3resource.com', 'o'] }, // #22
      { callback: findFirstNotRepeatedChar, input: 'abacddbec' }, // #23
      {
        callback: decrescentSort,
        input: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213],
      }, // #24
      { callback: longestName, input: ['Australia', 'Germany', 'United States of America'] }, // #25
      { callback: longestSubstringWithNoRepeatedChars, input: 'google.com' }, // #26
      { callback: longestPalindrome, input: 'abracadabra' }, // #27 */
    ],
  }),
  mounted() {
    setTimeout(() => this.createEditors(), 1000);
  },
  methods: {
    createEditors() {
      const editorConfig = {
        theme: 'ace/theme/monokai',
        mode: 'ace/mode/javascript',
        selectionStyle: 'text',
        fontSize: '14px',
        tabSize: 1,
        showPrintMargin: false,
        readOnly: true,
        highlightActiveLine: false,
        showGutter: false,
      };

      this.editors.forEach((editor, index) => window.ace.edit(`editor${index + 1}`, editorConfig));
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
  padding-bottom: 5px;
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

.editor {
  height: 650px;
  margin: 15px 0;
  width: 100%;
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

.ace_content {
  padding: 10px;
}

#editor1 {
  height: 100px;
}

#editor2 {
  height: 580px;
}

#editor3 {
  height: 400px;
}

#editor4 {
  height: 80px;
}

#editor5 {
  height: 230px;
}

#editor6 {
  height: 250px;
}

#editor7 {
  height: 155px;
}

#editor8 {
  height: 285px;
}

#editor9 {
  height: 290px;
}

#editor10 {
  height: 310px;
}

#editor11 {
  height: 300px;
}

#editor12 {
  height: 280px;
}
#editor13 {
  height: 330px;
}
#editor14 {
  height: 250px;
}
#editor15 {
  height: 155px;
}
#editor16 {
  height: 140px;
}
#editor17 {
  height: 175px;
}
#editor18 {
  height: 420px;
}
#editor19 {
  height: 80px;
}
#editor20 {
  height: 215px;
}
#editor21 {
  height: 450px;
}
#editor22 {
  height: 160px;
}
#editor23 {
  height: 200px;
}
#editor24 {
  height: 400px;
}
#editor25 {
  height: 80px;
}
#editor26 {
  height: 590px;
}
#editor27 {
  height: 460px;
}
</style>
