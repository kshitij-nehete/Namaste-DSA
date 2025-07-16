# 🔄 Max Consecutive Ones

This problem asks us to find the maximum number of consecutive `1`s in a binary array. It's a straightforward problem that can be solved with a single pass.

---

## 📝 Problem Statement

Given a binary array `nums`, return the maximum number of consecutive `1`s in the array.

- [LeetCode Problem Link](https://leetcode.com/problems/max-consecutive-ones/)

---

## 💡 Approach

- Iterate through the array, maintaining a `current count` of consecutive ones.
- If the current element is `1`, increment `current count`.
- If the current element is `0`, it means the sequence of ones is broken. At this point, compare `current count` with a `maximum count` found so far and update `maximum count` if `current count` is greater. Reset `current count` to `0`.
- After the loop finishes, there might be a trailing sequence of ones. So, perform one final comparison between `current count` and `maximum count`.

---

## 🛠️ Solution

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    } else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }

  return Math.max(currCount, maxCount);
};
```
