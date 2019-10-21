/**
https://leetcode.com/problems/minimum-absolute-difference/

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    if (!arr) return arr;
    if (arr.length < 2) return arr;
    
    let sortedArr = arr.sort((a,b) => a-b);
    
    let minDiff = function () {
        let minValue = Infinity;
        
        for (let i = 0; i < sortedArr.length - 1; i++) {
         minValue = Math.min(minValue, sortedArr[i+1] - sortedArr[i]);
        }
        
        return minValue;
    }();
    
    let result = [];
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
        if ((sortedArr[i+1] - sortedArr[i]) === minDiff) {
            result.push([sortedArr[i], sortedArr[i+1]]);

        }
    }    
    
        console.log(result)

    return result;
    
    
};
