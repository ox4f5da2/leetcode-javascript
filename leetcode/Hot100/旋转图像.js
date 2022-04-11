/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  // 把当前元素旋转到下一个位置(next)时，就把next上的元素也旋转到下一个位置
  // 从外层向内层遍历更新
  // 从第一行(最外层)开始更新
  let len = matrix.length;
  recursion(0, len);
  return matrix;
  function recursion(startIndex, n) {
    // startIndex开始的坐标，n为壳的某一边长度
    if (n <= 0) return;
    for (let i = startIndex; i < (len + n) / 2 - 1; i++) {
      let x = startIndex, y = i, startValue = matrix[x][y], cnt = 0; // 每次只要循环四次就行
      while (cnt++ < 4) {
        let tx = y, ty = len - 1 - x, tmp = matrix[tx][ty];
        matrix[tx][ty] = startValue;
        [startValue, x, y] = [tmp, tx, ty];
      }
    }
    recursion(startIndex + 1, n - 2);
  }
};
console.log(rotate([[5, 1, 9], [2, 4, 8], [13, 3, 6]]));