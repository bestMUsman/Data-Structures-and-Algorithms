// Matrix Depth First Search
function matrixDepthFirstSearch(arr) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      results.push(arr[j][i]);
    }
  }
  return results;
}

let array = [[15, 10, 22], [2, 5, 18], [20, 15, 8]];
matrixDepthFirstSearch(array);
