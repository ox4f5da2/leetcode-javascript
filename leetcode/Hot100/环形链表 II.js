/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 import LinkedList from "../utils/linkedList.js";
 let arr = [1];
 let llist = new LinkedList(arr);
 let head = llist.head;
 llist.toString();
 function detectCycle(head) {
   let [fast, slow] = [head, head];
   do {
     fast = fast?.next?.next;
     slow = slow?.next
   } while (fast !== slow);
   if (fast === undefined || slow === undefined) return null;
   fast = head;
   while (fast !== slow) {
     fast = fast?.next;
     slow = slow?.next;
   }
   return fast === undefined ? null : fast;
 };
 console.log(detectCycle(head));