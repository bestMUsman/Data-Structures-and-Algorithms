// Insertion Sort
function insertionSort(array) {
  let arr = array;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j > 0; j--) {
        if (arr[j] > arr[j - 1]) {
          break;
        }
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

let arrForInsertionSort = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
insertionSort(arrForInsertionSort);