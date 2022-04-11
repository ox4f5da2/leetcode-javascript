/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  let flag = 1, sum = 0, ifHasSigned = false;
  s = s.trim();
  for (let i = 0, len = s.length; i < len; i++){
    let ascii = s[i].charCodeAt();
    // 如果是数字0-9
    if (ascii === 43 && ifHasSigned === false) {
      flag = 1;
      ifHasSigned = true;
    }
    else if (ascii === 45 && ifHasSigned === false) {
      flag = -1;
      ifHasSigned = true;
    }
    else if (ifHasSigned = true && ascii >= 48 && ascii <= 57) sum = sum * 10 + (ascii - 48);
    else break;
  }
  sum *= flag 
  if (sum >= MIN && sum <= MAX) return sum;
  else if (sum > MAX) return MAX;
  else if (sum < MIN) return MIN;
};
console.log(myAtoi("21474836460"));