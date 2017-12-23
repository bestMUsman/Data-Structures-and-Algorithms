// Valid Parenthesis:
const isValidParenthesis = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(")");
    } else if (s[i] == "[") {
      stack.push("]");
    } else if (s[i] == "{") {
      stack.push("}");
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

let a = "()[]{}"; // true
let b = "([[])"; // false
isValidParenthesis(a);