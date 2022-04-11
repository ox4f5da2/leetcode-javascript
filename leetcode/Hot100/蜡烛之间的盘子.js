/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
function platesBetweenCandles(s, queries) {
  let result = [];
  queries.forEach(array => {
    let candels = [];
    for (let i = array[0]; i <= array[1]; i++){
      if (s[i] === "|") candels.push(i);
    }
    let len = candels.length;
    if (len <= 1) result.push(0);
    else result.push(candels[len - 1] - candels[0] + 1 - len)
  })
  return result;
};
console.log(platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]]));