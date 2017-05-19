'use strict';

// let nums = [1,5,10,3, 7, 7, 9, 2];
//
// const quickSort = (nums) => {
//   if(nums.length <= 1) return nums;
//   let pivot = nums[nums.length - 1];
//   let left = []; //values smaller than pivot
//   let right = []; //values greater than pivot
//   //account for pivot in the array length (last index => length -1)
//   for(let i = 0; i < nums.length-1; i++){
//
//     if(nums[i] < pivot){
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }
//   //or
//   let fullySorted = quickSort(left).concat(pivot, quickSort(right));
//   console.log(fullySorted);
//   return fullySorted;
//   // return [...quickSort(left), pivot, ...quickSort(right)];
// };
//
// quickSort(nums);


const quickSort = (nums) => {
  if(nums.lengh <=1 ) return nums;
  let pivot = nums[nums.length -1];
  let left = [];
  let right = [];
  for(let i = 0; i < nums.length-1; i++){
    if(nums[i]<pivot){
      left.push(nums[i]);
    } else if(nums[i] > pivot){
      right.push(nums[i]);
    }
  }
  let fullySorted = quickSort(left).concat(pivot, quickSort(right));
  console.log(fullySorted);
  return fullySorted;
};
