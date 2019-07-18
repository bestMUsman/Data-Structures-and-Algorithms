const secondMaxNum = arr => Math.max(delete arr.splice(arr.indexOf(Math.max(...arr)), 1), ...arr);
console.log(secondMaxNum(input))
