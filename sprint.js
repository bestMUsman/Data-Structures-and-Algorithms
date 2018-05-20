function isInDictionary(str) {
  let dictionary = ['sprint', 'print', 'sprin', 'prin', 'pint', 'int', 'it', 'i'];
  // let dictionary = ['sprint', 'print', 'prin', 'pri', 'sprin'];
  if (dictionary.includes(str)) {
    return true;
  }
  return false;
}

function sprint(str, map = {}) {
  map[str] = true;
  if (str.length < 2) return true;
  for (let i = 0; i < str.length; i++) {
    let newStr = str.substr(0, i) + str.substr(i + 1);
    if (!map[newStr] && isInDictionary(newStr) && sprint(newStr, map)) {
      return true;
    }
  }
  return false;
}

sprint('sprint');
