/**
 * @param {ListNode} head
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
function ifExitNode(node) {
  return node === undefined ? null : node;
}
function swapPairs(head) {
  let afterSwap = new ListNode("head", head), temp = afterSwap;
  let [point1, point2] = [ifExitNode(temp?.next), ifExitNode(temp?.next?.next)];
  while (point1 && point2) {
    // 交换节点
    temp.next = point2;
    point1.next = point2.next;
    point2.next = point1;
    // 下一轮的位置更新
    temp = ifExitNode(temp?.next?.next);
    point1 = ifExitNode(temp?.next);
    point2 = ifExitNode(point1?.next);
  }
  return afterSwap.next;
};
let list = arrayToLinkedList([]);
console.log(toString(list));
console.log(toString(swapPairs(list)));