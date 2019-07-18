let input = [
  ['bill', 23],
  ['ted', 95],
  ['joe', 82],
  ['bill', 89],
  ['tom', 92],
  ['ted', 100]
]


// [name, score]

// output: return the person with the highest average score

function findAvgScore(arr) {
  let map = {};
  let name = "";
  let maxAvgScore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i][0]] === undefined) {
      map[arr[i][0]] = arr[i][1];
    } else {
      map[arr[i][0]] = map[arr[i][0]] + ((arr[i][1] - map[arr[i][0]]) / 2);
    }
    if (map[arr[i][0]] > maxAvgScore) {
      maxAvgScore = map[arr[i][0]];
      name = arr[i][0];
    }
  }
  console.log(`${name}: ${maxAvgScore}`);
}

findAvgScore(input);
