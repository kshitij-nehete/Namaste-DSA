# 🧼 Move Zeroes

Moving all zeroes to the end of an array while keeping the order of non-zero elements is a common array manipulation problem. Let's solve it efficiently in JavaScript! 🚀

## 📝 Problem Statement

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Modify the array **in-place** without making a copy.

- [LeetCode Problem Link](https://leetcode.com/problems/move-zeroes/description/)

## 💡 Approach

- Use a pointer `x` to track the position where the next non-zero element should go.
- Loop through the array and whenever you find a non-zero, put it at position `x` and increment `x`.
- After all non-zero elements are placed correctly, fill the rest of the array with `0`s.

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

// Example usage:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
```

## 🧠 Explanation

- First loop: We iterate through the array and copy all non-zero elements to the beginning of the array using pointer `x`.
- The pointer `x` keeps track of the next position where a non-zero element should be placed.
- Second loop: After all non-zero elements are in their correct positions, we fill the remaining positions with zeros.
- This maintains the relative order of non-zero elements while moving all zeros to the end.

## 🖨️ Output

```
[1, 3, 12, 0, 0]
```

## 📝 Notes

- Time Complexity: O(n) - two passes through the array
- Space Complexity: O(1) - only using constant extra space
- This is an optimal in-place solution
- The relative order of non-zero elements is preserved
- Alternative approaches include using two pointers with swapping, but this approach is cleaner and easier to understand
