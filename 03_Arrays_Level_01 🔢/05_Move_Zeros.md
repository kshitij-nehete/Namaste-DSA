# 🧼 Move Zeroes

Moving all zeroes to the end of an array while keeping the order of non-zero elements is a common array manipulation problem. Let’s solve it efficiently in JavaScript! 🚀

---

## 📝 Problem Statement

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Modify the array **in-place** without making a copy.

- [LeetCode Problem Link](https://leetcode.com/problems/move-zeroes/description/)

---

## 💡 Approach

- Use a pointer `x` to track the position where the next non-zero element should go.

- Loop through the array and whenever you find a non-zero, put it at position `x` and increment `x`.

- After all non-zero elements are placed correctly, fill the rest of the array with `0`s.

---

## 🛠️ Solution

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};
```
