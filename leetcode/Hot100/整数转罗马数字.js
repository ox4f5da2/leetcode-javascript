/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  // I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
  let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let romanNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; // 存储每个字符代表的数字大小
  let romanCharNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 用来存储各种字符有几个
  let str = "";
  for (let i = 0, len = romanNum.length; i < len; i++) {
    romanCharNum[i] = Math.floor(num / romanNum[i]);
    num %= romanNum[i];
  }
  for (let i = 0, len = romanCharNum.length; i < len; i++){
    str += romanCharNum[i] === 0 ? "" : romanArr[i].repeat(romanCharNum[i]);
  }
  return str;
};
console.log(intToRoman(3));