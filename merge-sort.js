'use strict';

const mergeSort = (nums) => {
  if(nums.length < 2) return nums;
  const length = nums.length;
  const middle = Math.floor(length / 2);
  // .SLICE() is not destructive. does not modify original original array.
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  //recursive calls
  //as soon as mergeSort returns, we want to merge

  return merge(mergeSort(left), mergeSort(right));

  //or preserve state in the middle
  //sortedLeft = mergeSort(left);
  //sortedRight = mergeSort(right);
  //return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  let results = [];
  //if left.length ever gets to 0 (if(left.length <= 0)), it returns false. saying if "left.length exists", continue on is shorthand.

  while(left.length && right.length) {
    if(left[0] <= right[0]){
      //take the 0 element in left off, and push it to the results array
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  //check to see if there are any lengths still exist
  while(left.length){
    results.push(left.shift());
  }
  while(right.length){
    results.push(right.shift());
  }
  console.log('results array => ', results);
  return results;
  //or spread syntax
  //return [...results]
};
