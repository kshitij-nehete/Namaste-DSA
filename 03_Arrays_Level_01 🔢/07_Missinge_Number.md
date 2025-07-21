# 🔢 Missing Number

Find the missing number in an array containing n distinct numbers in the range [0, n]. 🚀

## 📝 Problem Statement

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

- [LeetCode Problem Link](https://leetcode.com/problems/missing-number/)

## 💡 Approach

- Calculate the expected sum of numbers from 0 to n using the formula: `n * (n + 1) / 2`
- Calculate the actual sum of all elements in the array
- The difference between expected sum and actual sum gives us the missing number

## 🛠️ Solution

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    totalSum = totalSum + nums[i];
  }

  return expectedSum - totalSum;
};

// Example usage:
let nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2
```

## 🧠 Explanation

- We use the mathematical formula for sum of first n natural numbers: `n * (n + 1) / 2`
- Since we have numbers from 0 to n, and one is missing, we calculate what the sum should be
- We then calculate the actual sum of the given array
- The difference gives us the missing number

## 📝 Notes

- Time Complexity: O(n) - single pass through the array
- Space Complexity: O(1) - only using constant extra space
- This approach is efficient and handles edge cases well
- Alternative approaches include using XOR or sorting, but this mathematical approach is optimal
