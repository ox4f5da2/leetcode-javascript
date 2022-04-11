var MinStack = function() {
  this.storage = [];
  this.minStack = []; // 保存最小值
  this.length = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.storage.push(val);
  if (this.length === 0) this.minStack.push(val);
  else {
    if (val < this.minStack[this.length - 1]) this.minStack.push(val);
    else this.minStack.push(this.minStack[this.length - 1]);
  }
  this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.storage.pop();
  this.minStack.pop();
  this.length = this.length - 1 < 0 ? 0 : this.length - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let stack = new MinStack();
stack.push(4);
stack.push(2);
stack.push(3);
stack.push(1);
stack.push(3);
stack.push(4);