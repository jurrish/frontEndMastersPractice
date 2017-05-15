'use strict';

let bubbleSort = (nums) => {
  //set outer loop
  do {
    var swapped = false;
    for(var i = 0; i < nums.length; i++){
      //if the number we are looking at is greater than the next number, swap them
      if(nums[i] > nums[i+1]) {
        let temp = nums[i];
        nums[i] = nums[i+1]; //set the variable
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

console.log(bubbleSort([5,3,7,1,10,4]));
