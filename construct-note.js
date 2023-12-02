// add whatever parameters you deem necessary
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

///////////////////////////////////////////////////////////////////////////////////////////////////
// use frequency counter method

// create an object that stores the count of each letter
// createFreqCounter('abc') // {a: 1, b: 1, c: 1}
const createFreqCounter = (str) => {
  let freqCounter = {};

  for (let char of str) {
    freqCounter[char] = (freqCounter[char] + 1) || 1;
  }
  return freqCounter;
}

const constructNote = (str1, str2) => {
  // call createFreqCounter of str1 and str2
  const str1Freq = createFreqCounter(str1);
  const str2Freq = createFreqCounter(str2);
  console.log('str1Freq: ', str1Freq);
  console.log('str2Freq: ', str2Freq);

  // if letters in str1 are present in str2, and count of each letter is <= count in str 2, return true
  // else return false
  for (let key in str1Freq) {
    if (!str2Freq[key]) return false;
    if (str1Freq[key] > str2Freq[key]) return false;
  }
  return true;
}

module.exports = constructNote;