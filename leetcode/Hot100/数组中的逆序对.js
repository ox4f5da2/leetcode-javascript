/**
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs(arr) {
  let result = 0;
  mergeSort(0, arr.length - 1);
  return result;
  function mergeSort(left, right) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      return merge(mergeSort(left, mid), mergeSort(mid + 1, right));
    }
    else {
      return [arr[right]];
    }
  }
  function merge(leftArr, rightArr) {
    let arr = [];
    let [i, j, len1, len2] = [0, 0, leftArr.length, rightArr.length];
    while (i < len1 && j < len2) {
      if (leftArr[i] <= rightArr[j]) arr.push(leftArr[i++]);
      else {
        result += len1 - i;
        arr.push(rightArr[j++]);
      }
    }
    while (i < len1) arr.push(leftArr[i++]);
    while (j < len2) arr.push(rightArr[j++]);
    return arr;
  }
};
console.log(reversePairs([1, 3, 2, 3, 1, 2]));