/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
import LinkedList from "../utils/linkedList.js";
let arr = [1, 2,3, 2,1];
let head = new LinkedList(arr).head;
function isPalindrome(head) {
  let arr = [], currentNode = head;
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  let [left, right] = [0, arr.length - 1];
  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    }
    else return false;
  }
  return true;
};
console.log(isPalindrome(head));