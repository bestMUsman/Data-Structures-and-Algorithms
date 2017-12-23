// Matrix Diagonal Sum
function matrixDiagonalSum(arr) {
  let countOne = 0;
  let countTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        countOne += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        countTwo += arr[i][j];
      }
    }
  }
  console.log(countOne);
  console.log(countTwo);
}

let array = [[15, 10, 22], [2, 5, 18], [20, 15, 8]];
matrixDiagonalSum(array);