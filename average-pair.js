// add whatever parameters you deem necessary
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// **Constraints**:
// Time Complexity: O(N)

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

///////////////////////////////////////////////////////////////////////////////////////////////////
// use multiple pointers method

const averagePair = (arr, target) => {
  // have two pointers (left and right)
  // loop through entire array
  // compare left and right values
  // if comparison of left and right values === target value, return true
  // left or right index increases or decreases depending on result of comparison

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    let avg = (arr[leftIdx] + arr[rightIdx]) / 2;
    console.log('avg: ', avg);
    if (avg === target) {
      return true;
    } else if (avg > target) {
      rightIdx --;
    } else {
      leftIdx ++;
    }
  }
  return false;
}

module.exports = averagePair;