/*
https://leetcode.com/problems/move-zeroes/description/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/


const moveZeroes = (arr, j = 0) => arr.forEach((e, i) => ((arr[i] != 0) && ([arr[j++], arr[i]] = [arr[i], arr[j]])))

const moveZeroes = (arr) => {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
}
