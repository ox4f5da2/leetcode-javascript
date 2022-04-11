/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s;
  let arr = [];
  let currentRow = 0, currentColumn = 0, directionFlag = "down"; // directionFlag确定了更新的方向
  // 初始化arr数组
  for (let i = 0; i < numRows; i++) arr.push([]);
  // Z字变换
  for (let i = 0, len = s.length; i < len; i++) {
    arr[currentRow][currentColumn] = s[i];
    if (directionFlag === "down") {
      if (currentRow !== numRows - 1) {
        currentRow++;
      }
      else {
        directionFlag = "up";
        currentRow--;
        currentColumn++;
      }
    }
    else if (directionFlag === "up") {
      if (currentRow !== 0) {
        currentRow--;
        currentColumn++;
      }
      else {
        directionFlag = "down";
        currentRow++;
      }
    }
  }
  // 打印变换后的字符串
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== undefined) {
        str += arr[i][j];
      }
    }
  }
  return str;
};
console.log(convert('ABCD', 2));