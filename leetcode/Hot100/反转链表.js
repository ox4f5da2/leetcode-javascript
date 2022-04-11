/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import LinkedList from '../utils/linkedList.js';
let list = new LinkedList([1, 2, 3, 4, 5]);
let head = list.head;
list.toString();
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function reverseList(head) {
  let root = new ListNode('head'), currentNode = head, nextNode;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = root.next;
    root.next = currentNode;
    currentNode = nextNode;
  }
  return root.next;
};
let afterReverse = reverseList(head);
LinkedList.LinkedListToString(afterReverse);