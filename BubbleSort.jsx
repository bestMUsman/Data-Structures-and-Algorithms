// Bubble Sort
function bubbleSort(array) {
    function sortArr() {
      for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
          [array[i - 1], array[i]] = [array[i], array[i - 1]];
        }
      }
    }
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        i = 0;
        sortArr();
      }
    }
    return array;
  }
  
  let arrForBubbleSort = [5, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
  bubbleSort(arrForBubbleSort);
  