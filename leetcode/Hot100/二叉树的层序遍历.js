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
import BinaryTree from "../utils/binaryTree.js";
let arr = [3, 9, 20, null, null, 15, 7];
let root = new BinaryTree(arr).root;
function levelOrder(root) {
  let result = [];
  recursion(root, 0);
  return result;
  function recursion(root, depth) {
    if (root === null) return;
    if (result[depth] === undefined) {
      result[depth] = [];
    }
    result[depth].push(root.val);
    recursion(root.left, depth + 1);
    recursion(root.right, depth + 1);
  }
};
console.log(levelOrder(root));