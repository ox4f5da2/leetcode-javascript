/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口法
function lengthOfLongestSubstring(s) {
  let maxLength = 0; // 存储所有不重复字符的最大长度值
  let tempLength = 0; // 存储当前不重复字符的长度
  let diffStrArr = []; // 存储当前不重复的字符
  for (let i = 0, len = s.length; i < len; i++){
    let idx = diffStrArr.indexOf(s[i]);
    if (idx < 0) {
      diffStrArr.push(s[i]);
      tempLength++;
    }
    else {
      if (tempLength > maxLength) maxLength = tempLength;
      diffStrArr = [...diffStrArr.slice(idx + 1), s[i]]; 
      tempLength = diffStrArr.length;
    }
  }
  return Math.max(maxLength, tempLength); // 假如只有一个字符串那么maxLength将不会更新
};
let result = lengthOfLongestSubstring("pwwkew");
console.log(result);