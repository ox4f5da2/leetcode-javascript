/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 快速乘
function fastMultiple(num1, num2) {
  let result = 0;
  while (num2) {
    if (num2 & 1) result += num1;
    num1 *= 2;
    num2 = ~~(num2 / 2);
  }
  return result;
}
function findMinUpperBound(num1, num2) {
  let result = 0;
  while (num1 > num2 * (1 << result)) result++;
  return result;
}
function divide(dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend > 2147483647 ? 2147483647 : dividend;
  if (divisor === -1) return -dividend > 2147483647 ? 2147483647 : -dividend;
  let flag;
  if (dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0) flag = 1;
  else flag = -1;
  [dividend, divisor] = [Math.abs(dividend), Math.abs(divisor)];
  // 首先找到最小的上界
  let bound = findMinUpperBound(dividend, divisor);
  let [left, right] = [(bound - 1) < 0 ? 0 : 1 << (bound - 1), 1 << bound];
  let mid = Math.floor((left + right) / 2);
  // console.log("dividend:", dividend, "left: ", left, "right: ", right);
  while (left <= right) {
    let tmp = fastMultiple(mid, divisor);
    if (tmp < dividend) left = mid + 1;
    else if (tmp > dividend) right = mid - 1;
    else break;
    mid = Math.floor((left + right) / 2);
  }
  return mid * flag;
};
console.log(divide(-2147483648, -1));