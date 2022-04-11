/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
import BinaryTree from "../utils/binaryTree.js";
let arr = [3, 9, 20, 5, 8, 15, 7, 13, 16, 24, 37, 10, 6, 54, 1];
let bt = new BinaryTree(arr);
console.log("中序遍历:", bt.inOrderTraversal());
console.log("先序遍历:", bt.preOrderTraversal());
function buildTree(preorder, inorder) {

};
console.log(buildTree());