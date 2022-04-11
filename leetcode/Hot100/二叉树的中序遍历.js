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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
let root2 = new TreeNode(3);
let root1 = new TreeNode(2, root2, null);
let root = new TreeNode(1, null, root1);
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
console.log(inorderTraversal(root));