/**
https://leetcode.com/problems/intersection-of-two-arrays-ii/

Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]


 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     let arr = [];
    
//     nums1.forEach(num => {
//         let indexInNum2 = nums2.indexOf(num);
        
//         if (indexInNum2 > -1) {
//             arr.push(num);
//             nums2.splice(indexInNum2, 1);
//         }
        
//     })
//     return arr;
    
// };

var intersect = function(nums1, nums2) {

function saveNumsIntoMap(arr, map = {}) {
  arr.forEach(num => {
    map[num] = map[num] + 1 || 1;
  });

  return map;
}

let nums1Map = saveNumsIntoMap(nums1); // {1: 2, 2: 2}
let nums2Map = saveNumsIntoMap(nums2); // {2: 2}

let reuslt = [];
for (let key in nums1Map) {
  if (nums2Map[key] !== undefined) {
    let minAppears = Math.min(nums1Map[key], nums2Map[key]);

    for (let i = 0; i < minAppears; i++) {
      reuslt.push(key);
    }
  }
}

return reuslt;
    
};
