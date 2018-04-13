/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:
[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 
const groupAnagrams = function(arr) {
    let countMap = {};
    let counter = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sortedValue = arr[i].split('').sort((a,b) => a>b).join('');
        if (countMap[sortedValue] === undefined) {
            countMap[sortedValue] = counter;
            newArr[counter] = [];
            counter++;
        }
        newArr[countMap[sortedValue]].push(arr[i]);
    }
    return newArr;
};
