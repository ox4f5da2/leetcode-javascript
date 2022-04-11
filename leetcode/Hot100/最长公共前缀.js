/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let str = "";
  for (let i = 0, len1 = strs[0].length; i < len1; i++){
    for (var j = 0, len2 = strs.length; j < len2 - 1; j++){
      if (strs[j][i] !== strs[j + 1][i])
        break;
    }
    if (j === len2 - 1) str += strs[j][i];
    else return str;
  }
  return str;
};