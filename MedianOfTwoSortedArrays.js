// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2];
    newArr.sort((a, b) => a-b);
    if (newArr.length % 2 === 0) {
        return (newArr[(newArr.length/2)-1] + newArr[(newArr.length/2)]) / 2;
    } else {
        return newArr[Math.floor(newArr.length/2)];
    }
};
