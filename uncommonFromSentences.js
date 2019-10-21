/**

https://leetcode.com/problems/uncommon-words-from-two-sentences/

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 
Example 1:
Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

Example 2:
Input: A = "apple apple", B = "banana"
Output: ["banana"]


 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  let map = {};

  A.split(" ").forEach(word => {
    map[word] = map[word] + 1 || 1;
  });

  B.split(" ").forEach(word => {
    map[word] = map[word] + 1 || 1;
  });

  let result = [];

  for (let key in map) {
    if (map[key] === 1) {
      result.push(key);
    }
  }

  return result;

};
