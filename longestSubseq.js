  // Input: {"able", "ale", "apple", "bale", "kangaroo"}, "abppplee"
  // Output: "apple"

  const D = ['able', 'ale', 'apple', 'bale', 'kangaroo'];
  const S = 'abppplee';


  function longestSubseq(str, words) {
    let longestWord = "";

    words.forEach(eachWord => {

      let notFound = false;
      let strIndex = 0;

      for (let i = 0; i < eachWord.length; i++) {
        let charIndex = str.indexOf(eachWord[i], strIndex);
        if (charIndex > -1) {
          strIndex = charIndex;
        } else {
          notFound = true;
          break;
        }
      }

      if (!notFound) {
        if (eachWord.length > longestWord.length) {
          longestWord = eachWord;
        }
      }

    });
    return longestWord;
  }

  longestSubseq(S, D);
