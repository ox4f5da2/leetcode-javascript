/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 将链表展示
function toString(head) {
  let currentNode = head, array = [];
  while (currentNode) {
    array.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return array.join(" --> ");
}
// 将数组转化成链表
function arrayToLinkedList(array) {
  let list = new ListNode('head'), temp = list; // temp是用来防止最后得到的list是指向链表末尾
  for (let i = 0; i < array.length; i++) {
    temp.next = new ListNode(array[i]);
    temp = temp.next;
  }
  return list.next;
}
/********************************************************/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function removeNthFromEnd(head, n) {
  let [slow, fast] = [head, head];
  for (let i = 0; i < n; i++) fast = fast.next === undefined ? null : fast.next;
  if (fast) {
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  }
  else {
    return head.next;
  }
  slow.next = slow.next.next;
  return head;
};
let list = arrayToLinkedList([1]);
console.log(toString(list));
let afterRemove = removeNthFromEnd(list, 1);
console.log(toString(afterRemove));
// 1 2 3 4 5