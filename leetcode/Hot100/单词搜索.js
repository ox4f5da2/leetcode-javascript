/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  let [vistied, row, column, wordLength] = [[], board.length, board[0].length, word.length - 1];
  // 初始化vistied数组, visit数组用来记录是否访问过
  for (let i = 0; i < row; i++) {
    vistied.push([]);
    for (let j = 0; j < column; j++) {
      vistied[i][j] = false;
    }
  }
  // board的每一元素都有可能是单词的开始处
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let res = backTracking(i, j, 0);
      if (res) return true;
    }
  }
  return false;
  // x,y为开始的坐标,wordIndex为单词的第几个字母
  function backTracking(x, y, wordIndex) {
    /* 
      退出条件:
      1.长度大于word的length
      2.第i个字符不等于单词第i个字符
      3.visited[i][j]为true
      4.board[x][y]不合法,即i,j < 0 || i >= row || j >= column
    */
    if (x < 0 || y < 0 || x >= row || y >= column || board[x][y] !== word[wordIndex] || vistied[x][y]) {
      return false;
    }
    if (wordIndex >= wordLength) {
      return true;
    }
    vistied[x][y] = true;
    let result = backTracking(x - 1, y, wordIndex + 1) || backTracking(x, y - 1, wordIndex + 1)
      || backTracking(x + 1, y, wordIndex + 1) || backTracking(x, y + 1, wordIndex + 1)
    vistied[x][y] = false;
    return result;
  }
};
console.log(exist(board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"));