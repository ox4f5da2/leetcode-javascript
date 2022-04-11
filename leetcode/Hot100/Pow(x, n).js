/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function fastPow(x, n) {
  let result = 1;
  while (n) {
    console.log(n);
    if (n & 1) result *= x;
    x *= x;
    n = ~(n >> 1);
  }
  return result;
}
function myPow(x, n) {
  if (x === 0) return 0;
  else if (x === 1) return 1;
  else if (x === -1) return ((n & 1) === 1 ? -1 : 1);
  if (n === 0) return 1;
  return n > 0 ? fastPow(x, n) : 1 / fastPow(x, -n);
};
console.log(myPow(2, -2147483648));

// 防君子不防小人
function myPow(x, n) {
  return n > 0 ? Math.pow(x, n) : 1 / Math.pow(x, -n);
};