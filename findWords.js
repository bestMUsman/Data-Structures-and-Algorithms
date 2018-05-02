/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

const findWords = function(words) {
  let map = {q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1, a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2, z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3};
  for (let i = 0; i < words.length; i++) {
      let firstCharRow = map[words[i][0].toLowerCase()];
      for (let j = 1; j < words[i].length; j++) {
        if (map[words[i][j].toLowerCase()] != firstCharRow) {
          words.splice(i, 1);
          i--;
          break;
      }
    }
  }
  return (words);
};
