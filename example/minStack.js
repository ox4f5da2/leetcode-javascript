import MinStack from "../src/minStack.js";
let minStack = new MinStack();
minStack.push([6, 4, 2, 3, 1, 6]);
minStack.toString();
while (minStack.length()) {
  minStack.toString();
  console.log("当前栈内元素最小值为:" + minStack.getMin());
  minStack.pop();
}
minStack.push([1, 2, 3]);
console.log(minStack.top());
minStack.clear();
console.log(minStack.length());
minStack.toString();