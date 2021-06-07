/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let q = []
  let res = []
  if (root) {
    q.push(root)
  }
  while (q.length > 0) {
    let n = q.length
    let temp = []
    for (let i = 0; i < n; i++) {
      let node = q.shift()
      temp.push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    res.push(temp)
  }
  return res
};
// @lc code=end

