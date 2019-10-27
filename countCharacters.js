/**
https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).
 
Return the sum of lengths of all good strings in words.

Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.


* @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let map = {};
    let matchedStrs = "";

    for (let i = 0; i < chars.length; i++) {
        if (map[chars[i]]) {
            map[chars[i]]++
        } else {
            map[chars[i]] = 1;
        }
    }

    words.forEach(str => {
        let newMap = {};
        let notFound = false;

        for (let i = 0; i < str.length; i++) {
            let character = str[i];
            if (newMap[character] === undefined && map[character]) {
                newMap[character] = map[character];
            }


            if (newMap[character] === undefined || newMap[character] === 0) {
                notFound = true;
                break;
            } else {
                newMap[character]--;
            }
        }

        if (!notFound) {
            matchedStrs += str;
        }
    })

    return matchedStrs.length;
};

