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
 * @return {void} Do not return anything, modify root in-place instead.
 */
import BinaryTree from "../utils/binaryTree.js";
let arr = [];
let myRoot = new BinaryTree(arr).root;
function toString(root) {
  let str = "";
  while (root) {
    str += root.val + " --> ";
    root = root.right;
  }
  return str + "null";
}
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
function flatten(root) {
  if (root === null || root.val === null) return root;
  let treeRoot = new TreeNode(), tmp = treeRoot; 
  preOrder(root);
  function preOrder(root) {
    if (root === null) return;
    tmp.right = new TreeNode(root.val, null,null);
    tmp = tmp.right;
    preOrder(root.left);
    preOrder(root.right);
  }
  root.right = treeRoot.right.right;
  root.left = null;
};
flatten(myRoot);
console.log(myRoot);
console.log(toString(myRoot));
