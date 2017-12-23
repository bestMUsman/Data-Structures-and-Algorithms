/**
 * @param {string} s
 * @return {boolean}
 */

// Validate if a given string is numeric.
// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
 
const isNumber = function(x) {
    if (x === " ") {
        return false;
    }
    return !isNaN(x);
};