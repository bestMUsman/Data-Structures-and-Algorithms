/**

https://leetcode.com/problems/find-common-characters/submissions/

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:
Input: ["bella","label","roller"]
Output: ["e","l","l"]

 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(arr) {
    let map = {};
    
    arr.forEach(word => {
        let appears = {};
        
        for (let i = 0; i < word.length; i++) {
            appears[word[i]] = appears[word[i]]+1 || 1;
        }
        
        for (let key in appears) {
            if (!map[key]) {
                map[key] = {
                    inNumOfWords: 1,
                    minFoundInEachWord: appears[key],
                }
            } else {
                map[key].minFoundInEachWord = Math.min(map[key].minFoundInEachWord, appears[key]);
                map[key].inNumOfWords++;
            }
        }
    });
    
    let result = [];
    
    for (let key in map) {
        if (map[key].inNumOfWords === arr.length) {
            for (let i = 0; i < map[key].minFoundInEachWord; i++) {
                result.push(key);
            }
        }
    }
    
    return result;
};
