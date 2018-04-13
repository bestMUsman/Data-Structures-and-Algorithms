/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
str1 = "anagram", str2 = "nagaram", return true.
str1 = "rat", str2 = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
**/

const isAnagram = function(str1, str2) {
	if (str1.length !== str2.length) return false;
	if (str1.length === 0) return true;
	let mapOne = {}, mapTwo = {}, counter = 0;
	for (let i = 0; i < str1.length; i++) {
	  if (str1[i] !== str2[i]) {
	    if (mapOne[str2[i]] !== undefined) {
	      mapOne[str2[i]]--;
	      counter--;
	    } else {
	      mapTwo[str2[i]] = mapOne[str2[i]] + 1 || 1;
	      counter++;
	    }
	    if (mapTwo[str1[i]] !== undefined) {
	      mapTwo[str1[i]]--;
	      counter--;
	    } else {
	      mapOne[str1[i]] = mapOne[str1[i]] + 1 || 1;
	      counter++;
	    }
	  }
	}
	return counter === 0;
};
