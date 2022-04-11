/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let romanCharArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let romanNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; // 存储每个字符代表的数字大小
  let sum = 0;
  if (s.length === 1) return romanNum[romanCharArr.indexOf(s)];
  for (let i = 0, len = s.length; i < len; i++){
    if (s[i] === "C" && s[i + 1] === "M" || s[i] === "C" && s[i + 1] === "D" || s[i] === "X" && s[i + 1] === "C" ||
      s[i] === "X" && s[i + 1] === "L" || s[i] === "I" && s[i + 1] === "X" || s[i] === "I" && s[i + 1] === "V") {
      sum += romanNum[romanCharArr.indexOf(s[i] + s[i + 1])];
      i += 1;
    }
    else {
      sum += romanNum[romanCharArr.indexOf(s[i])];
    }
  }
  return sum;
};
console.log(romanToInt("MCMXCIV"));