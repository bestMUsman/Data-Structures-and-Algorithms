/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
**/

const maxSubArray = function(arr) {
  let sum = arr[0], max = sum;
  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(sum + arr[i], arr[i])
    max = Math.max(sum, max);
  }
  return max;
};
