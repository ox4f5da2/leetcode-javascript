/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 回溯 + 剪枝 + 哈希表
function wordBreak(s, wordDict) {
  let result = false, path = "",map = new Map();
  backTracking(s[0])
  return result;
  function backTracking(nextChar) {
    if (path === s) {
      result = true;
      return ;
    }
    if (result || map.get(path) || path.length >= s.length) return;
    // 保存之前出现的所有可能，防止重复遍历
    if (path !== s.slice(0, path.length)) {
      map.set(path, false);
      return;
    }
    else {
      map.set(path, true);
    }
    for (let i = 0; i < wordDict.length; i++) {
      if (wordDict[i][0] === nextChar) {
        let orginLength = path.length;
        path += wordDict[i];
        backTracking(s[path.length]);
        path = path.slice(0, orginLength);
      }
    }
  }
};
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));