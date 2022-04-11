/**
 * @param {ListNode} l1
 * @param {ListNode} l2
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
/**************************以下为提交的代码**************************/
// 官方提供的节点
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
// 两数之和
function addTwoNumbers (currentNode1, currentNode2) {
  let l3 = new ListNode('head'), temp = l3, carry = 0; // carry为进位
  while (currentNode1 || currentNode2) {
    let sum = carry;
    if (currentNode1?.val !== undefined) sum += currentNode1.val;
    if (currentNode2?.val !== undefined) sum += currentNode2.val;
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    carry = Math.floor(sum / 10);
    currentNode1 !== null && (currentNode1 = currentNode1.next);
    currentNode2 !== null && (currentNode2 = currentNode2.next);
  }
  if (carry !== 0) temp.next = new ListNode(carry);
  return l3.next;
};
// let l1 = arrayToLinkedList([9,9,9,9,9,9,9]);
// let l2 = arrayToLinkedList([9,9,9,9]);
// let result = addTwoNumbers(l1, l2);
// console.log(toString(result));