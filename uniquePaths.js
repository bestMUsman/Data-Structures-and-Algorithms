/*
https://leetcode.com/problems/unique-paths/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png

Note: m and n will be at most 100.

Example 1:
Input: m = 3, n = 2
Output: 3

Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Example 2:
Input: m = 7, n = 3
Output: 28

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (x, y, map = {}, xPos = 1, yPos = 1) {
    if (map[xPos] && map[xPos][yPos]) return map[xPos][yPos];
    if (xPos > x || yPos > y) return 0;
    if (xPos === x && yPos == y) return 1;

    let xPlus = uniquePaths(x, y, map, xPos + 1, yPos);
    let yPlus = uniquePaths(x, y, map, xPos, yPos + 1);

    map[xPos] = map[xPos] || {};

    map[xPos][yPos] = xPlus + yPlus;

    return map[xPos][yPos];
};
