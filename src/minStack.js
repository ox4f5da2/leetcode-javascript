/**
 * @class 最小栈
 */
export default class MinStack {
  /**
   * 最小栈
   * @param {void} 无需传入参数
   */
  constructor() {
    this.storage = [];
    this.minStack = []; // 保存最小值
    this.size = 0;
  }
  /** 
   * 压入栈
   * @param {number[]} val 需压入栈的元素数组
   * @return {void} 无返回值
   */
  push(val) {
    val.forEach(item => {
      this.storage.push(item);
      if (this.size === 0) this.minStack.push(item);
      else {
        if (item < this.minStack[this.size - 1]) this.minStack.push(item);
        else this.minStack.push(this.minStack[this.size - 1]);
      }
      this.size++;
    })
  };

  /**
   * 弹出栈顶元素
   * @param {void} 无需传入参数
   * @return {void} 无返回值
   */
  pop() {
    this.storage.pop();
    this.minStack.pop();
    this.size = this.size - 1 < 0 ? 0 : this.size - 1;
  };

  /**
   * 获取栈顶元素
   * @param {void} 无需传入参数
   * @return {number} 栈顶元素
   */
  top() {
    return this.storage[this.size - 1];
  };

  /**
   * 获取当前栈内最小值
   * @param {void} 无需传入参数
   * @return {number} 当前栈内最小值
   */
  getMin() {
    return this.minStack[this.size - 1];
  };

  /**
   * 以字符串形式打印栈中元素
   * @returns {void}
   */
   toString () {
    console.log("(栈底-->栈顶): " + this.storage.join());
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
    this.storage.length = 0;
    this.minStack.length = 0;
  }
}