'use strict';

let factorial = function(n){
  //base case
  if(n <2) return 1;
  return n * factorial(n-1);
};

factorial(3); // 3 * 2 * 1
factorial(4); // 4 * 3 * 2 * 1
factorial(5); // 5 * 4 * 3 * 2 * 1


console.log('factorial(3) => ', factorial(3));
console.log('factorial(4) => ', factorial(4));
console.log('factorial(5) => ', factorial(5));
