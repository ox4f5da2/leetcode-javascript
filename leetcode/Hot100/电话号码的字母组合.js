/**
 * @param {string} digits
 * @return {string[]}
 */
const map = new Map([
  ["2", ["a","b","c"]],
  ["3", ["d","e","f"]],
  ["4", ["g","h","i"]],
  ["5", ["j","k","l"]],
  ["6", ["m","n","o"]],
  ["7", ["p","q","r","s"]],
  ["8", ["t","u","v"]],
  ["9", ["w","x","y","z"]]
])
function letterCombinations(digits) {
  if (digits.length === 0) return [];
  let queue = [""];
  for (let i = 0; i < digits.length; i++){
    let letters = map.get(digits[i]);
    for (let j = 0, len = queue.length; j < len; j++) {
      let firstElement = queue.shift();
      let str = firstElement === undefined ? "" : firstElement;
      letters.forEach(item => queue.push(str + item));
    }
  }
  return queue;
};
console.log(letterCombinations("23"));