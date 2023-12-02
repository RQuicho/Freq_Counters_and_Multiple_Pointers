// add whatever parameters you deem necessary
// Write a function called separatePositive which accepts an array of non-zero integers. 
// Separate the positive integers to the left and the negative integers to the right. 
// The positive numbers and negative numbers need not be in sorted order. 
// The problem should be done in place (in other words, do not build a copy of the input array).

// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -8, -1]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// use multiple pointers method

const separatePositive = (arr) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    if (arr[leftIdx] < 0 && arr[rightIdx] > 0) {
      let temp = arr[leftIdx];
      arr[leftIdx] = arr[rightIdx]
      arr[rightIdx] = temp;
  
      leftIdx ++;
      rightIdx --;
    } else if (arr[leftIdx] > 0) {
      leftIdx ++;
    } else {
      rightIdx --;
    }
  }
  return arr;
}

module.exports = separatePositive;

// while (leftIdx < rightIdx) {
//   if (arr[leftIdx] > 0 && arr[rightIdx] < 0) {

//    }
//   if (arr[leftIdx] < 0) {
//    arr[leftIdx + 1] = arr[leftIdx];
//    leftIdx ++;
//  }
//  if (arr[rightIdx] > 0) {
//    arr[rightIdx - 1] = arr[rightIdx];
//    rightIdx --;
//  }
// }
// return arr;