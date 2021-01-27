---
title: 'Write a JavaScript function that checks whether a passed string is palindrome or not.'
description: 'A palindrome is word, phrase, or sequence that reads the same backward as forward,
e.g., madam or nurses run.'
input: 'madam'
fnName: 'checkPalindrome'
---

```js
function checkPalindrome(string) {
  // lower case the string and remove all non-alphanumeric characters
  const sanitizedString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  let charsCount = 0;

  // Check whether the string is empty or not
  const isEmptyString = sanitizedString === '';
  if (isEmptyString) {
    return 'Entry is not a palindrome. Empty string';
  }

  const isSingleChar = sanitizedString.length === 1;
  if (isSingleChar) {
    return 'Entry is a palindrome.';
  }

  const isEven = sanitizedString.length % 2 === 0;
  // Ignore middle character if string is odd
  charsCount = isEven ? sanitizedString.length / 2 : (sanitizedString.length - 1) / 2;

  // Loop through to check the first character to the last character and then move next
  for (let x = 0; x < charsCount; x++) {
    // Compare characters and check if they match
    if (sanitizedString[x] !== sanitizedString.slice(-1 - x)[0]) {
      return 'Entry is not a palindrome.';
    }
  }
  return 'The entry is a palindrome.';
}
```


