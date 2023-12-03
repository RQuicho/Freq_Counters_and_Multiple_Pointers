// add whatever parameters you deem necessary
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
//  In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// use multiple pointers method

const isSubsequence = (str1, str2) => {
  let str1Idx = 0;
  let str2Idx = 0;

  while (str2Idx < str2.length) {
    if (str2[str2Idx] === str1[str1Idx]) {
      str1Idx ++;
    }
    if (str1Idx === str1.length) {
      return true;
    }
    str2Idx ++;
  }
  return false;
}

module.exports = isSubsequence;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// use frequency counter method?

// create frequency counter object that has characters and number of times they occur
// compare str1 obj to str2 obj
// all of chars in str1 should exist in str2
// frequency of chars in str1 should be the same as in str2
// figure out a way to check order of chars

// const createFreqCounter = (str) => {
//   let freqCounter = {};

//   for (let char of str) {
//     freqCounter[char] = (freqCounter[char] + 1) || 1;
//   }
//   return freqCounter;
// }

// const isSubsequence = (str1, str2) => {
//   const str1Freq = createFreqCounter(str1);
//   const str2Freq = createFreqCounter(str2);
//   console.log('str1Freq: ', str1Freq);
//   console.log('str2Freq: ', str2Freq);

//   if (str1.length > str2.length) return false;
//   for (let key in str1Freq) {
//     if (!str2Freq[key]) return false;
//     if (str1Freq[key] > str2Freq[key]) return false;
//   }
//   return true;
// }


