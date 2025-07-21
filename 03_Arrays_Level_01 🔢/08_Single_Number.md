# 🔢 Single Number

Find the element that appears only once in an array where every other element appears twice. ⚡

## 📝 Problem Statement

Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

- [LeetCode Problem Link](https://leetcode.com/problems/single-number/)

## 💡 Approach

- Use XOR (exclusive OR) operation which has special properties:
  - `a ^ a = 0` (any number XOR with itself equals 0)
  - `a ^ 0 = a` (any number XOR with 0 equals the number itself)
  - XOR is commutative and associative
- XOR all numbers together - duplicates will cancel out, leaving only the single number

## 🛠️ Solution

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
};

// Example usage:
let nums = [2, 2, 1];
console.log(singleNumber(nums)); // Output: 1

let nums2 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums2)); // Output: 4
```

## 🧠 Explanation

- We initialize `xor` to 0
- We iterate through the array and XOR each element with our running result
- Since every number appears twice except one, all duplicate pairs will cancel out (become 0)
- Only the single number will remain in the final result

## 📝 Notes

- Time Complexity: O(n) - single pass through the array
- Space Complexity: O(1) - only using constant extra space
- This is an optimal solution using bit manipulation
- XOR operation is key to solving this problem efficiently
- Alternative approaches like using HashMap would require O(n) extra space
