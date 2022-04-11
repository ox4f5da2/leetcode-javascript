/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 求阶乘
function factorial(n) {
  return [...(new Array(n)).keys()].map(idx => idx + 1).reduce((pre, curr) => pre *= curr, 1);
};
// 每条路径的长度为 m + n - 2
function uniquePaths(m, n) {
  return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
};
console.log(uniquePaths(3, 7));