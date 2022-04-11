/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 两个链表都为非空
function getIntersectionNode(headA, headB) {
  let [point1, point2] = [headA, headB];
  while (point1 !== point2) {
    point1 = point1 === null ? headB : point1.next;
    point2 = point2 === null ? headA : point2.next;
  }
  return point1;
};