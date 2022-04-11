/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let [len1, len2] = [nums1.length, nums2.length];
  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let [left, right] = [0, len1];
  let max_left_part = 0,
    min_right_part = 0;
  let i, j, left_nums1_max, left_nums2_max, right_nums1_min, right_nums2_min;
  const MAX = Number.POSITIVE_INFINITY,
    MIN = Number.NEGATIVE_INFINITY;
  while (left <= right) {
    i = ~~((left + right) / 2);
    j = ~~((len1 + len2 + 1) / 2 - i);
    left_nums1_max = i === 0 ? MIN : nums1[i - 1],
    left_nums2_max = j === 0 ? MIN : nums2[j - 1],
    right_nums1_min = i === len1 ? MAX : nums1[i],
    right_nums2_min = j === len2 ? MAX : nums2[j];
    if (left_nums1_max <= right_nums2_min) {
      max_left_part = left_nums1_max >= left_nums2_max ? left_nums1_max : left_nums2_max;
      min_right_part = right_nums1_min <= right_nums2_min ? right_nums1_min : right_nums2_min;
      left = i + 1;
    }
    else {
      right = i - 1;
    }
  }
  return (len1 + len2) % 2 === 0 ? (max_left_part + min_right_part) / 2 : max_left_part;
};
console.log(findMedianSortedArrays([1, 3], [2]));