/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
 
  let res = []
  function dfs(root, path){
    if(!root) return
    path += root.val.toString()
    if(!root.left && !root.right){
      res.push(path)
    } else {
      path += '->'
      dfs(root.left, path)
      dfs(root.right, path)
    }
  }
  dfs(root, '')
  return res
};
// @lc code=end

