# 🔁 Remove Duplicates from Sorted Array

Removing duplicates from a sorted array is a common interview problem. Let's see how to solve it efficiently in JavaScript! 🚀

---

## 📝 Problem Statement

Given a sorted array, remove the duplicates **in-place** such that each unique element appears only once.

Return the new length of the array after duplicates have been removed.

- [LeetCode Problem Link](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

---

## 💡 Notes & Approach

- Always read the problem statement carefully for hints and ideas.

- Analyze the provided examples to understand the requirements.

- "In-place" means you should modify the original array without using extra space for another array.

---

## 🧩 Example

Input:

`[1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 9]`

Output:

`[1, 2, 3, 4, 5, 6, 7, 8, 9]` (new length: 9)

---

## 🛠️ Solution

```js
/**

 * @param {number[]} nums

 * @return {number}

 */

var removeDuplicates = function (nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;

      nums[x] = nums[i];
    }
  }

  return x + 1;
};

// Example usage:

let nums = [1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 9];

let newLength = removeDuplicates(nums);

console.log(newLength); // Output: 9

console.log(nums.slice(0, newLength)); // Output: [1,2,3,4,5,6,7,8,9]
```

---

## 🧠 Explanation

- Since the array is sorted, duplicates are always adjacent.

- We use a pointer `x` to track the position of the last unique element.

- We iterate through the array:

- If the current element is greater than the last unique element (`nums[x]`), we increment `x` and update `nums[x]` with the current element.

- After the loop, the first `x + 1` elements of `nums` are unique.

- The function returns the new length (`x + 1`).

---

## 🖨️ Output

```

9

[1, 2, 3, 4, 5, 6, 7, 8, 9]

```

---

## 📝 Notes

- The solution works in O(n) time and O(1) extra space.

- Only the first part of the array (up to the returned length) contains the unique elements.

- This is a classic two-pointer technique for array problems! 🏆

---
