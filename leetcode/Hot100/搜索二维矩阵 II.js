/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let [i, j] = [0, matrix[0].length - 1];
  let [row, column] = [matrix.length - 1, j];
  while ((i >= 0 && i <= row) && (j >=0 && j <= column) ) {
    if (matrix[i][j] < target) i++;
    else if (matrix[i][j] > target) j--;
    else if (matrix[i][j] === target) return true;
  }
  return false;
};
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 30));