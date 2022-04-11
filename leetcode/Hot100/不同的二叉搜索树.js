/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  let G = new Array(n + 1).fill(0);
  G[0] = G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      G[i] += G[j] * G[i - j - 1];
    }
  }
  return G[n];
};
console.log(numTrees(3));