/**
 * @class 链表节点
 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * @class 单向链表
 */
export default class LinkedList {
  /**
   * 单向链表
   * @param {number[] | string[]} array 【可选】加入链表元素所组成的数组，默认为[]
   */
  constructor(array = []) {
    this.size = 0;
    this.head = array.length === 0 ? new ListNode('head', null) : this.init(array);
  }
  init(array) {
    let head = new ListNode('head', null), temp = head;
    array.forEach(item => {
      temp.next = new ListNode(item);
      temp = temp.next;
    })
    this.size = array.length;
    return head;
  }

  /**
   * 向链表尾部添加节点
   * @param {number | string} val 添加的元素值
   * @returns {void} 无返回值
   */
  append(val) {
    if (this.length === 0) {
      this.head.next = new ListNode(val);
    }
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new ListNode(val);
    }
    this.size++;
  }

  /**
   * 在指定下标处插入节点
   * @param {number} position 插入的下表位置
   * @param {number | string} val 插入的值
   */
  insert(position, val) {
    if (!(position >= 0 && position <= this.size)) throw new Error("第一个参数不在指定范围内");
    let node = new ListNode(val);
    let currentNode = this.head, idx = position;
    while (idx > 0) {
      currentNode = currentNode.next;
      idx--;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    this.size++;
  }

  /**
   * 获取指定下标元素的值
   * @param {number} position 要获取元素的下标
   * @returns {number | string} 指定下标元素的值
   * @description 链表的第一个元素为head
   */
  getValByPosition(position) {
    if (!(position >= 0 && position <= this.size)) throw new Error("第一个参数不在指定范围内");
    let currentNode = this.head, idx = position;
    while (idx > 0) {
      currentNode = currentNode.next;
      idx--;
    }
    return currentNode.val;
  }

  /**
   * 查找指定元素对应的第一个下标
   * @param {number | string} val 待查找的值
   * @returns {number} 找到返回下标，找不到返回-1
   */
  indexOf(val) {
    let currentNode = this.head, cnt = 0, flag = false;
    while (currentNode) {
      if (typeof currentNode.val !== 'object' && currentNode.val !== val
        || typeof currentNode.val === 'object' && currentNode.val.toString() !== val.toString()) {
        currentNode = currentNode.next;
        cnt++;
      }
      else {
        flag = true;
        break;
      }
    }
    return flag ? cnt : -1;
  }

  /**
   * 查找指定键是否存在
   * @param {number | string} key 待查找的键
   * @returns {boolean} 存在返回true，不存在返回false
   */
  has(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val[0] !== key) {
        currentNode = currentNode.next;
      }
      else {
        return true;
      }
    }
    return false;
  }

  /**
   * 查找指定键对应的值
   * @param {number | string} key 待查找的键
   * @returns {any} 存在返回值，否则返回undefined
   */
  getValue(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val[0] !== key) {
        currentNode = currentNode.next;
      }
      else {
        return currentNode.val[1];
      }
    }
    return undefined;
  }

  /**
   * 更新指定下标节点的值
   * @param {number | string} position 要更新节点的下标
   * @param {number | string} val 新值
   * @returns {void} 无返回值
   */
  updateVal(position, val) {
    if (!(position >= 0 && position < this.size)) throw new Error("第一个参数不在指定范围内");
    let currentNode = this.head, idx = position;
    while (idx > 0) {
      currentNode = currentNode.next;
      idx--;
    }
    currentNode.val = val;
  }

  /**
   * 删除指定下标的元素
   * @param {number} position 要删除的节点的下标
   * @returns {void} 无返回值
   */
  removeByPosition(position) {
    if (!(position > 0 && position <= this.size)) throw new Error("第一个参数不在指定范围内");
    let currentNode = this.head, idx = position - 1;
    while (idx > 0) {
      currentNode = currentNode.next;
      idx--;
    }
    currentNode.next = currentNode.next.next;
    this.size--;
  }

  /**
   * 删除第一个指定元素的值
   * @param {number | string} val 要删除的值
   * @returns {void} 无返回值
   */
  removeByVal(val) {
    this.removeByPosition(this.indexOf(val));
  }

  /**
   * 翻转链表
   * @param {ListNode} oldHead 需要翻转链表的头节点
   * @return {ListNode} 返回翻转后的链表的头节点
   */
  static reverseList(oldHead) {
    let head = new ListNode('head'), currentNode = oldHead.next;
    while (currentNode) {
      let node = new ListNode(currentNode.val);
      node.next = head.next;
      head.next = node;
      currentNode = currentNode.next;
    }
    return head;
  }

  /**
   * 删除倒数第n个节点(不包括head节点)
   * @param {number} n
   * @return {void} 无返回值
   */
  removeNthFromEnd(n) {
    if(!(n > 0 && n <= this.size)) throw new Error("第一个参数不在指定范围内");
    let [slow, fast] = [this.head, this.head];
    while (n) {
      fast = fast.next;
      n--;
    }
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
  }

  /**
   * 获取链表的元素个数(除了head节点外的个数)
   * @param {void} 无需传入参数
   * @returns {number} 链表中元素个数
   */
  length() {
    return this.size;
  }

  /**
   * 获取链表的头节点
   * @param {void} 无需传入参数
   * @returns {number} 返回链表的头节点
   */
  getHeadNode() {
    return this.head;
  }

  /**
   * 将链表以字符串形式打印
   * @param {void} 无需传入参数
   * @return {void} 无返回值
   */
  toString() {
    let currentNode = this.head, str = "";
    while (currentNode) {
      str += currentNode.val + " --> ";
      currentNode = currentNode.next;
    }
    str += "null";
    console.log(str);
  }

  /**
   * 将链表以字符串形式打印
   * @param {ListNode} head 链表的头节点
   * @return {void} 无返回值
   */
  static linkedListToString(head) {
    let currentNode = head, str = "";
    while (currentNode) {
      str += typeof currentNode.val !== 'object' ? currentNode.val + " --> " : `["${currentNode.val[0]}": ${currentNode.val[1]}] --> `;
      currentNode = currentNode.next;
    }
    str += "null";
    return str;
  }
}