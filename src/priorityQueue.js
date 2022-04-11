import Queue from './queue.js';
/**
 * @class 优先队列节点，包含值和优先等级
 */
class QueueNode {
  /**
   * 优先队列
   * @param {any} val 优先队列元素的值
   * @param {number} priority 优先队列元素的优先等级，值越大优先级越高
   */
  constructor(val, priority) {
    this.val = val;
    this.priority = priority
  }
}

/**
 * @class 优先队列
 */
export default class PriorityQueue extends Queue {
  /**
   * @param {void} 无需传入参数
   */
  constructor() {
    super();
  }
  /**
   * 入队
   * @param {any} queueNodeArray 待加入优先队列的键值对数组
   * @returns {void} 无返回值
   * @example queueNodeArray = [{val: 'a', priority: 1}, {val: 'b', priority: 2}];
   * new PriorityQueue().enqueue(queueNodeArray);
   */
  enqueue(queueNodeArray) {
    queueNodeArray.forEach(item => {
      const node = new QueueNode(item.val, item.priority);
      if (super.length() === 0) {
        this.dataStore.push(node);
      }
      else {
        // 二分查找插入点
        let [left, right, target, arr] = [0, this.dataStore.length - 1, node.priority, this.dataStore];
        while (left < right) {
          let mid = Math.ceil((left + right) / 2);
          if (arr[mid].priority >= target) left = mid;
          else right = mid - 1;
        }
        if (left === 0) {
          if (target > arr[0].priority) this.dataStore.splice(0, 0, node);
          else this.dataStore.splice(1, 0, node);
        } 
        else this.dataStore.splice(left + 1, 0, node);
      }
    });
  }

  /**
   * 出队
   * @param {void} 无需传入参数
   * @returns {any} 队列第一个元素
   */
  dequeue() {
    return super.dequeue();
  }

  /**
   * 查看队列第一个元素
   * @param {void} 无需传入参数
   * @returns {any} 返回队列第一个元素
   */
  front() {
    return super.front();
  }

  /**
   * 返回栈的元素个数
   * @param {void} 无需传入参数
   * @returns {number} 栈中元素个数
   */
  length() {
    return super.length();
  }

  /**
   * 清空队列中所有元素
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
  clear() {
    super.clear();
  }

  /**
   * 以字符串形式打印栈中元素
   * @returns {void}
   */
  toString() {
    let str = '', data = this.dataStore;
    console.log(data);
    for (let item of data) {
      str += `[val: ${item.val}/priority: ${item.priority}] --> `;
    }
    str += "null"
    return str;
  }
}