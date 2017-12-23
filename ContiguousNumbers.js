// contiguousNumbers:
const contiguousNumbers = function(arr, num) {
  let count = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];

    while (count > num) {
      count -= arr[start];
      start++;
    }

    if (count === num && start < i) return true;
  }
  return false;
};

contiguousNumbers([6, 1, 2, 3, 3, 7], 8); // True because  [2 + 3 + 3] == 8, the sum of one item in an array is equal to the number we are looking for.
