function getCombinations(target) {
  let result = [], path = [], list = [1, 2, 3];
  backTracking();
  return result;

  function backTracking() {
    if (path.length === 4) {
      if (path.reduce((pre, curr) => pre += curr, 0) === target) {
        let temp = [path[0]];
        for (let i = 1; i < 4; i++) temp[i] = path[i] + temp[i - 1];
        result.push(temp);
      }
      return;
    }

    for (let i = 0; i < 3; i++) {
      path.push(list[i]);
      backTracking();
      path.pop();
    }
  }
}

// 获取分割字符串的方式
function getSplitMethods() {
  let map = new Map();
  for (let i = 4; i <= 12; i++) map.set(i, getCombinations(i));
  return map;
}

const map = getSplitMethods();
/*********************************************************************/
function ifValid(str) {
  let integer = Number.parseInt(str);
  return integer >= 0 && integer <= 255 && (integer + "").length === str.length;
}

/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(str) {
  let len = str.length;
  if (len < 4 || len > 12) return [];
  let result = [];
  map.get(len).forEach(method => {
    const ip1 = str.slice(0, method[0]),
      ip2 = str.slice(method[0], method[1]),
      ip3 = str.slice(method[1], method[2]),
      ip4 = str.slice(method[2], method[3]);
    if (ifValid(ip1) && ifValid(ip2) && ifValid(ip3) && ifValid(ip4)) result.push(`${ip1}.${ip2}.${ip3}.${ip4}`);
  });
  return result;
}

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("11101"));
console.log(restoreIpAddresses("0"));