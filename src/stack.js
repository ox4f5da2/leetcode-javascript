/**
 * @class 栈
 */
export default class Stack {
  /**
   * 栈
   * @param {void} 无需传入参数
   */
  constructor() {
    this.dataStore = [];
    this.size = 0;
  }

  /**
   * 入栈
   * @param {any} element 待被压入栈的元素所组成的数组
   * @returns {void} 无返回值
   */
  push(element) {
    element.forEach(item => {
      this.dataStore[this.size++] = item;
    });
  }

  /**
   * 返回栈顶元素
   * @param {void} 无需传入参数
   * @returns {any} 栈顶元素
   */
  top () {
    return this.dataStore[this.size - 1];
  }

  /**
   * 弹出栈顶元素
   * @param {void} 无需传入参数
   * @returns {any} 栈顶元素
   */
  pop () {
    this.size = this.size - 1 < 0 ? 0 : this.size - 1;
    return this.dataStore.pop();
  }

  /**
   * 返回栈的元素个数
   * @param {void} 无需传入参数
   * @returns {number} 栈中元素个数
   */
  length () {
    return this.size;
  }

  /**
   * 清空栈中所有元素
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
  clear () {
    this.size = 0;
    this.dataStore.length = 0;
  }
  
  /**
   * 以字符串形式打印栈中元素
   * @returns {void}
   */
  toString () {
    console.log("(栈底-->栈顶): " + this.dataStore.join());
  }
}