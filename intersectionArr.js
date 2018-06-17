/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

*/

const intersection = (nums1, nums2) => {
  if (!nums1 || !nums2 || nums1.length === 0 || nums2.length === 0) return [];
  let map = {}, arr = [], i = 0;
  while (nums1[i] !== undefined || nums2[i] !== undefined) {
    if (nums1[i] === nums2[i]) {
      arr.push(nums1[i]);
      map[nums1[i]] = 3;
      i++;
      continue;
    }

    if (nums1[i] !== undefined) {
      if (map[nums1[i]] === 2) {
        arr.push(nums1[i]);
        map[nums1[i]] = 3;
      } else if (map[nums1[i]] === undefined) {
        map[nums1[i]] = 1;
      }
    }

    if (nums2[i] !== undefined) {
      if (map[nums2[i]] === 1) {
        arr.push(nums2[i]);
        map[nums2[i]] = 3;
      } else if (map[nums2[i]] === undefined) {
        map[nums2[i]] = 2;
      }

    }
    i++;
  }
  return arr;
};
