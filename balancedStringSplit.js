/*
https://leetcode.com/problems/split-a-string-in-balanced-strings/

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

 
Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
*/

var balancedStringSplit = function (s) {
  let res = [];
  let rCount = 0;
  let lCount = 0;
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      lCount++;
      newStr += "L";
    }

    if (s[i] === "R") {
      rCount++;
      newStr += "R";
    }


    if (rCount == lCount) {
      res.push(newStr);
      rCount = 0;
      lCount = 0;
      newStr = "";
    }
  }

  return res.length;
};
