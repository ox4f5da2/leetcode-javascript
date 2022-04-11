/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// hashTable
function groupAnagrams(strs) {
  let map = new Map();
  for (let str of strs) {
    // 同一种异位词单词排序后肯定相同
    let tmp = Array.from(str).sort().join(""), array = map.get(tmp);
    if (array === undefined) array = [];
    array.push(str);
    map.set(tmp, array);
  }
  return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));