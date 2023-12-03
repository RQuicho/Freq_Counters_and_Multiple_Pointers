// add whatever parameters you deem necessary
// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. 
// You can assume that there will be no duplicate values in the array.

// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2

// **Constraints**
// Time Complexity - O(N * log(N))
// **or**
// Time Complexity - O(N)

//////////////////////////////////////////////////////////////////////////////////////////////////
// use multiple pointers method

// start at first idx in array, compare that first idx to rest of array
// if sum === target number, add 1 to counter
// use a while loop (while first pointer < lenght of array)
// after while loop, return counter.


const countPairs = (arr, num) => {
  let leftIdx = 0;
  let rightIdx = leftIdx + 1;
  let counter = 0;

  while (leftIdx < arr.length - 1) {
    let sum = arr[leftIdx] + arr[rightIdx];
    if (sum === num) {
      counter ++;
      rightIdx ++;
    } 
    if (rightIdx === arr.length) {
      leftIdx ++;
      rightIdx = leftIdx + 1;
    } else {
      rightIdx ++;
    }
  }
  return counter;
}

module.exports = countPairs;
