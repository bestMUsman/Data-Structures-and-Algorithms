function createPascalTriangle(k) {
  let result = [];

  for (let y = 0; y < k; y++) {
    for (let x = 0; x <= y; x++) {
      if (x == 0) {
        result.push([1])
      } else {
        result[y].push((result[y - 1][x - 1] || 0) + (result[y - 1][x] || 0))
      }
    }
    console.log(result[y].join(' '))
  }

  return result;
}


createPascalTriangle(6)
