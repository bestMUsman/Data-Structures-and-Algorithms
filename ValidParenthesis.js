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

// Updated version:
function isValidParentheses(str) {
    let validOpenMap = {
        "{": "}",
        "[": "]",
        "(": ")"
    };

    let validCloseMap = {
        "}": true,
        ")": true,
        "]": true,
    };

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (validOpenMap[str[i]]) {
            stack.push(validOpenMap[str[i]]);
        } else if (validCloseMap[str[i]] && stack.pop() !== str[i]) {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("[{dsfdsfdasdas}{}adsfdsfdsf}]") === false);
console.log(isValidParentheses("sd[{dsfdsdas}dsf{dsf{adsf}adsfdsf}]") === true);
console.log(isValidParentheses("[({})]") === true); 
console.log(isValidParentheses("[(])") === false);
