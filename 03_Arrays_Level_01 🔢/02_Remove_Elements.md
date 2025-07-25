# 🗑️ Remove Element

Remove all instances of a given value from an array in-place and return the new length. This is a classic two-pointer technique problem! 🎯

## 📝 Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`
- Return `k`

- [LeetCode Problem Link](https://leetcode.com/problems/remove-element/)

## 💡 Approach

- Use a slow pointer `x` to track the position where the next valid element should be placed
- Use a fast pointer `i` to iterate through the array
- When we find an element that is not equal to `val`, place it at position `x` and increment `x`
- Skip elements that are equal to `val`
- Return `x` which represents the count of valid elements

## 🛠️ Solution

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0;

    for(let i = 0; i  num !== val).length;
};

// Two-pointer with swapping from end
var removeElementSwap = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            left++;
        }
    }
    return left;
};
```
