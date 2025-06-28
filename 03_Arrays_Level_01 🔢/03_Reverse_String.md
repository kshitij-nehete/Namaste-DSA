# 🔄 Reverse String

Reversing a string (or character array) is a classic coding interview problem. Let's see how to solve it in JavaScript by swapping characters in-place! 🚀

---

## 📝 Problem Statement

Given an array of characters, reverse the array **in-place**.

Do not return anything, modify the input array directly.

- [LeetCode Problem Link](https://leetcode.com/problems/reverse-string/)

---

## 💡 Approach

- Use two pointers: one at the start and one at the end of the array.

- Swap the characters at these pointers and move them towards each other.

- Continue until the pointers meet in the middle.

---

## 🛠️ Solution

```js
/**

 * @param {character[]} s

 * @return {void} Do not return anything, modify s in-place instead.

 */

var reverseString = function (s) {
  let len = s.length;

  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];

    s[i] = s[len - i - 1];

    s[len - i - 1] = temp;
  }
};

// Example usage:

let arr = ["h", "e", "l", "l", "o"];

reverseString(arr);

console.log(arr); // Output: ['o', 'l', 'l', 'e', 'h']
```

---

## 🧠 Explanation

- We only need to loop through half of the array (`halfLen`), because each swap handles two elements.

- For each index `i` from `0` to `halfLen - 1`:

- Swap the element at position `i` with the element at position `len - i - 1`.

- This reverses the array **in-place** (without using extra space).

---

## 🖨️ Output

```

['o', 'l', 'l', 'e', 'h']

```

---

## 📝 Notes

- This solution works in O(n) time and O(1) extra space.

- In-place reversal is a common pattern for array and string manipulation problems.

- The same logic can be applied to reverse arrays of numbers or other data
