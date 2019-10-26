/**

https://leetcode.com/problems/relative-sort-array/


Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
  let sortedArr = [];
  let notInArr2 = [];
    let arr1Count = {};

  arr1.forEach((item, index) => {
    (arr1Count[item] && arr1Count[item].push(item)) || (arr1Count[item] = [item]);
  });

  arr2.forEach(item => {
    if (arr1Count[item]) {
      sortedArr.push(...arr1Count[item]);
      delete arr1Count[item];
    }
  });

  for (let key in arr1Count) {
    notInArr2.push(...arr1Count[key]);
  }
  
 sortedArr.push(...notInArr2.sort((a,b) => a-b))

  return sortedArr;
}
