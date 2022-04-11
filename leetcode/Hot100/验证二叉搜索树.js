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
let arr = [5, 4, 6, null, null, 3, 7];
let root = new BinaryTree(arr).root;
// 递归
function isValidBST(root) {
  const MIN = -(2 ** 31) - 1, MAX = (2 ** 31);
  return process(root, MIN, MAX);
  function process(root, min, max) {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    let res = process(root.left, min, root.val) && process(root.right, root.val, max);
    return res;
  }
};
// 中序遍历
function inorderTraversal(root) {
  let result = [];
  inOrder(root);
  return result;
  function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    result.push(root.val);
    inOrder(root.right);
  }
};
function isValidBST(root) {
  let arr = inorderTraversal(root);
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}