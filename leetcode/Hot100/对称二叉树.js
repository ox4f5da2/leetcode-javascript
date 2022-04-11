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
 * @return {boolean}
 */
import BinaryTree from "../utils/binaryTree.js";
let arr = [1, 2, 2, 2, null, 2, null];
let root = new BinaryTree(arr).root;
function inorderTraversal(root) {
  let result = [];
  inOrder(root);
  return result;
  function inOrder(root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    result.push(root.val);
    inOrder(root.right);
  }
}
function isSymmetric(root) {
  let res = inorderTraversal(root);
  console.log(res);
  let [left, right] = [0, res.length - 1];
  while (left <= right) {
    if (res[left] === res[right]) {
      ++left;
      --right;
    }
    else {
      return false;
    }
  }
  return true;
};
console.log(isSymmetric(root));