/*
https://leetcode.com/problems/minimum-path-sum/

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, yPos = 0, xPos = 0, map = {}) {
    if (grid[yPos] === undefined || grid[yPos][xPos] === undefined) return Infinity;
    if (map[yPos] && map[yPos][xPos]) return map[yPos][xPos];
    if (yPos === grid.length-1 && xPos === grid[yPos].length-1) return grid[yPos][xPos];
    
    let right = minPathSum(grid, yPos, xPos+1, map);
    
    let down = minPathSum(grid, yPos+1, xPos, map);
    
    map[yPos] = map[yPos] = {};
    
    map[yPos][xPos] = Math.min(right, down) + grid[yPos][xPos];
    
    return map[yPos][xPos];
};
