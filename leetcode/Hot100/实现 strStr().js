/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 暴力解法
// function strStr(haystack, needle) {
//   if (needle === "") return 0;
//   let [len1, len2] = [haystack.length, needle.length];
//   for (let i = 0; i < len1; i++){
//     if (haystack[i] !== needle[0]) continue;
//     else {
//       for (var j = 0; j < len2; j++){
//         if (needle[j] !== haystack[i + j])
//           break;
//       }
//       if (j !== len2) continue;
//       else return i
//     }
//   }
//   return -1;
// };
// console.log(strStr("aaaaaa", "ab"));
// KMP
/*
  next数组:
  1. left = next[left - 1]; 循环,不相等
  2. next[i] = 0; left === 0,不相等,right++
  3. next[i] = left + 1; 相等,left++,right++
*/
function strStr(haystack, needle) {
  if (needle === "") return 0;
  let [len1, len2] = [haystack.length, needle.length];
  let next = [0] // next数组
  // 更新next数组
  for (let left = 0, right = 1; right < len2; right++){
    while (left > 0 && needle[left] !== needle[right]) left = next[left - 1];
    if (needle[left] === needle[right]) {
      next[right] = left + 1;
      left++;
    }
    else if (left === 0 && needle[left] !== needle[right]) {
      next[right] = 0;
    }
  }
  console.log(next);
  // 字符匹配
  for (let left = 0, right = 0; right < len1; right++){
    while (left > 0 && needle[left] !== haystack[right]) left = next[left - 1];
    if (needle[left] === haystack[right]) left++;
    if (left === len2) return right - len2 + 1;
  }
  return -1;
}
console.log(strStr("abcabdabcabc", "abcabc"));