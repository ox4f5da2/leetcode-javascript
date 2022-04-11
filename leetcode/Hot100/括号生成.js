/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let path = "", result = [], parenthesis = ["(", ")"];
  backTracking(0, 0);
  return result;
  function backTracking(leftParenthesisNum, rightParenthesisNum){
    if (path.length === n * 2) {
      if(path[0] === "(" && leftParenthesisNum === n) result.push(path);
      return;
    }
    if (leftParenthesisNum > n) return;
    for (let i = 0; i <= (leftParenthesisNum > rightParenthesisNum ? 1 : 0 ); i++){
      path += parenthesis[i];
      if (i === 0) leftParenthesisNum++;
      else rightParenthesisNum++;
      backTracking(leftParenthesisNum, rightParenthesisNum);
      if (path.slice(-1) === "(") leftParenthesisNum--;
      else rightParenthesisNum--;
      path = path.slice(0, -1);
    }
  }
};
console.log(generateParenthesis(4));