---
title: 'Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.'
description: 'Note: As the letter y can be regarded as both a vowel and a consonant, we do not count y as vowel here.'
input: 'The quick brown fox'
fnName: 'vowelCount'
---

```js
function vowelCount(string) {
    const vowels = 'aeiouAEIOU';
    const word = string.split('');
    const wordVowels = word.filter(char => vowels.indexOf(char) !== -1);
    const vowelsCount = wordVowels.length || 0;
    return vowelsCount;
}
```


