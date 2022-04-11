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
import LinkList from '../utils/linkedList.js';
let arr = [-1, 5, 3, 4, 0];
let list = new LinkList(arr);
let head = list.head;
list.toString();
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
function sortList(head) {
  let [slow, fast] = [head, head];
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 将链表分为两个链表，然后将两个链表合并
  let [point1, point2] = [head, slow], root = new ListNode('head'), tmp = root;
  while (point1 && point2) {
    if (point1.val <= point2.val) {
      tmp.next = point1;
      point1 = point1.next;
    }
    else {
      tmp.next = point2;
      point2 = point2.next;
    }
  }
  console.log(point1, point2);
  let rest = 
}
sortList(head);
list.toString();