/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9
Output: True

Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28
Output: False
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

const findTarget = function(root, tar) {
    let map = {};
      if (root === null) {
        return false;
      } else {
        function dfs(node) {
          if (node === null) return false;
          if (map[tar - node.val] !== undefined) {
              return true;
          } else {
            map[node.val] = true;
            return dfs(node.left) || dfs(node.right);
          }
        }
        return dfs(root);
      }
};
