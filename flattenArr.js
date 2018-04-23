let arr = [1, 2, 3, [4, 5, 6,7,8,9,10,[11,12,[13,[15,[17]]]]], 18];

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

flattenArr(arr)
