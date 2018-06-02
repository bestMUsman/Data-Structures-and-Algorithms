// Count number of paths from first index to the end (which is 2), and you can only go right and down

let arr = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 2]
]

function countPaths(arr, y = 0, x = 0, map = {}) {
  if (map[y] !== undefined && map[y][x] !== undefined) return map[y][x]
  console.log(y, x)
  if (arr[y] === undefined || arr[y][x] === undefined || arr[y][x] === 0) return 0;
  if (arr[y][x] === 2) return 1;
  if (map[y] === undefined) map[y] = {};
  map[y][x] = countPaths(arr, y + 1, x, map) + countPaths(arr, y, x + 1, map)
  return map[y][x];
}

countPaths(arr)
