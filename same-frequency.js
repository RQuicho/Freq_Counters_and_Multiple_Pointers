// add whatever parameters you deem necessary
// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

//////////////////////////////////////////////////////////////////////////////////////////////////

// use frequency counter method

const createFreqCounter = (num) => {
  let numArr = num.toString().split('');
  let freqCounter = {}

  for (let n of numArr) {
    freqCounter[n] = (freqCounter[n] + 1) || 1;
  }
  return freqCounter;
}

const sameFrequency = (num1, num2) => {
  const num1Freq = createFreqCounter(num1);
  const num2Freq = createFreqCounter(num2);

  if (num1.length !== num2.length) return false;
  for (let n in num1Freq) {
    if (!num2Freq[n]) return false;
    if (num1Freq[n] !== num2Freq[n]) return false;
  }
  return true;
}

module.exports = sameFrequency;
