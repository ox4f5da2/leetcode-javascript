/**
 * @param {number} num
 * @return {string}
 */
function convertToBase7(num) {
  if (num === 0) return "0";
  let stack = []; // 栈
  let flag = num >= 0 ? "" : "-";
  num = Math.abs(num);
  while (num) {
    stack.push(num % 7);
    num = Math.floor(num / 7);
  }
  return flag + stack.reverse().join("");
};
console.log(convertToBase7(0));