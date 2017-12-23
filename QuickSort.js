// Quick Sort
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let left = [],
    right = [],
    randNum = Math.floor(Math.random() * arr.length),
    pivot = arr[randNum];

  for (let i = 0; i < arr.length; i++) {
    if (i == randNum) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let unsortedArr = [10, 24, 54, 12, 123, 534, 3, 23, 11, 1, 334, 1, 2, 4, 6, 2];
quickSort(unsortedArr);