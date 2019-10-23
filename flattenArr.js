let arr = [1, 2, 3, [4, 5, 6,7,8,9,10,[11,12,[13,[15,[17]]]]], 18];

// Solution #1: (This might not be compatible with all browsers)
const flattenArr = arr => arr.flat(Infinity);

// Solution #2: With recursion
function flattenArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let newArr = flattenArr(arr[i]);
      arr.splice(i, 1, ...newArr)
      i += newArr.length;
    }
  }
  return arr;
}

// Solution #3: Without recursion
function flattenArr(arr) {
  for (let i = 0; arr[i] !== undefined; i++) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...arr[i]);
      i--;
    }
  }

  return arr;
}

flattenArr(arr)
