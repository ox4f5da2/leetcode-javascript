/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  push(value) {
    this.storage.push(value);
    this.size++;
  }
  pop() {
    this.storage.pop();
    this.size--;
  }
}
function isValid(s) {
  let stack = new Stack();
  for (let i = 0, len = s.length; i < len; i++){
    let storage = stack.storage;
    let length = storage.length;
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    }
    else {
      if (storage[length - 1] === "(" && s[i] === ")" || storage[length - 1] === "[" && s[i] === "]" || storage[length - 1] === "{" && s[i] === "}") {
        stack.pop();
      }
      else {
        stack.push(s[i]);
      }
    }
  }
  return stack.size === 0
};
console.log(isValid("]()"));