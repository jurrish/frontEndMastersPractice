'use strict';

let nums = [6,4,10,2,3,1,5,0];

let insertionSort = function(nums){
  for(let i = 1; i < nums.length; i++){
    //inner loop goes over the sorted part
    for(let j = 0; j < i; j++){
      if(nums[i] < nums[j]){
        //takes it out of the array (destructive method)
        const spliced = nums.splice(i,1); //dedups
        nums.splice(j, 0, spliced[0]); //inserts "spliced" into nums
      }
    }
  }
  console.log(nums);
};

insertionSort(nums);
