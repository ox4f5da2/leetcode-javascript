/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  return s.trim().split(" ").slice(-1)[0].length;
};
console.log(lengthOfLastWord(s = "Hello World"));