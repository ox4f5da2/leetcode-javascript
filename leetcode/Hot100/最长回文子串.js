/**
 * @param {string} s
 * @return {string}
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
class LinkedList{
  constructor() {
    this.head = new ListNode('head');
  }
  add(value) {
    let node = new ListNode(value);
    let currentNode = this.head;
    while (currentNode.next) currentNode = currentNode.next;
    currentNode.next = node;
  }
  toString() {
    let currentNode = this.head, array = [];
    while (currentNode) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(array.join(" --> "));
  }
}
function longestPalindrome(s) {
  let len = s.length;
  if (len === 1) return s;
  else if (len === 2) {
    if (s[0] === s[1]) return s;
    else return s[0];
  }
  else {
    let map = {}, palindrome = "";
    // 将所有元素的下标存到链表里,从右往左存会让下标大的存储在链表的开头
    for (let i = len - 1; i >= 0; i--){
      if (map[s[i]] === undefined) {
        let llist = new LinkedList();
        llist.add(i);
        map[s[i]] = llist;
      }
      else {
        map[s[i]].add(i);
      }
    }
    for (let i = 0; i < len; i++){
      let left = i, point = map[s[i]].head.next, copyRight = right = point.val; // copyRight存储是从哪个下标开始比较的
      while (left < right) {
        if (s[left] === s[right]) {
          right--;
          left++;
        }
        else {
          left = i;
          point = point.next;
          copyRight = right = point.val;
        }
      }
      result = s.slice(i, copyRight + 1);
      palindrome = result.length > palindrome.length ? result : palindrome;
    }
    return palindrome;
  }
};
console.log(longestPalindrome("babad"));