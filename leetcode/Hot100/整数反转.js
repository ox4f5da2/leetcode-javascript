/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  let flag = x >= 0 ? 1 : -1;
  x = Math.abs(x), sum = 0;
  while (x) {
    sum *= 10;
    sum += x % 10;
    x = Math.floor(x / 10);
  }
  if (sum >= MIN && sum <= MAX) return sum * flag;
  else return 0;
};
console.log(reverse(-123));