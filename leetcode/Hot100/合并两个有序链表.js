/**
 * @param {ListNode} list1
 * @param {ListNode} list2
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
/*************************************************************/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function mergeTwoLists(list1, list2) {
  let list = new ListNode('head'), temp = list;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    }
    else if (list1.val >= list2.val) {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  if (list1) {
    while (list1) {
      temp.next = list1;
      list1 = list1.next;
      temp = temp.next;
    }
  }
  else {
    while (list2) {
      temp.next = list2;
      list2 = list2.next;
      temp = temp.next;
    }
  }
  return list.next;
};
let list1 = arrayToLinkedList([0, 3]);
let list2 = arrayToLinkedList([-1, -2]);
let list = mergeTwoLists(list1, list2);
console.log(toString(list));