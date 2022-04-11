/**
 * @class 队列
 */
export default class Queue {
  /**
   * 队列
   * @param {void} 无需传入参数
   */
  constructor() {
    this.dataStore = [];
  }

  /**
   * 入队
   * @param {any} element 待被添加到队列的元素所组成的数组
   * @returns {void} 无返回值
   */
  enqueue(element) {
    element.forEach(item => {
      this.dataStore.push(item);
    });
  }

  /**
   * 出队
   * @param {void} 无需传入参数
   * @returns {any} 队列第一个元素
   */
  dequeue() {
    return this.dataStore.shift();
  }

  /**
   * 查看队列第一个元素
   * @param {void} 无需传入参数
   * @returns {any} 返回队列第一个元素
   */
  front() {
    return this.dataStore[0];
  }

  /**
   * 返回栈的元素个数
   * @param {void} 无需传入参数
   * @returns {number} 栈中元素个数
   */
  length () {
    return this.dataStore.length;
  }

  /**
   * 清空队列中所有元素
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
   clear () {
    this.dataStore.length = 0;
  }
  
  /**
   * 以字符串形式打印栈中元素
   * @returns {void}
   */
  toString () {
    console.log("(队头-->队尾): " + this.dataStore.join());
  }
}