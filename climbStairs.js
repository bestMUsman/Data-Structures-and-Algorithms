/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 or 3 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

*/

/**
 * @param {number} n
 * @return {number}
 */
 
 // Using DFS + Dynamic Programming 
function climbStairs(n = 0, map = {}) {
	if (n < 0) {
		return 0;
	} else if (n === 0) {
		return 1;
	} else if (map[n] === undefined) {
	  map[n] = [1,2,3].reduce((a,c) =>  a+climbStairs(n-c, map), 0) 
	}
	return map[n];
}

// Using loop
function climbStairs(n) {
  let map = {1: 1, 2: 2, 3: 4, temp: null}
  if (n < 4) return map[n];
  for (let i = 4; i <= n; i++) {
    map["temp"] = map[1] + map[2] + map[3];
    map[1] = map[2];
    map[2] = map[3];
    map[3] = map["temp"];
  }
  return map[3]
}

climbStairs(50);
