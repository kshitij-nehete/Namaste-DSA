# 🥈 Second Largest Number in an Array

## 📋 Problem Statement

Find the **second largest** number in a given array.

Let's solve it using JavaScript! 🚀

---

## 💻 Solution

```javascript
// Find Second Largest number in an array

function secondLargetNumber(arr) {
  let firstLargest = -Infinity;

  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;

      firstLargest = arr[i];
    } else {
      if (arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
  }

  return secondLargest;
}

let arr = [4, 6, 85, 2, 75, 21, 95];

let result = secondLargetNumber(arr);

console.log(result);
```

---

## 🧠 Explanation

- We need to find the **second largest** number, so we keep track of two variables:

- `firstLargest`: The largest number found so far.

- `secondLargest`: The second largest number found so far.

- We initialize both to `-Infinity` to handle negative numbers as well.

- As we loop through the array:

- If the current number is greater than `firstLargest`, we update `secondLargest` to be the old `firstLargest`, and then update `firstLargest` to the current number.

- If the current number is not the largest but is greater than `secondLargest`, we update `secondLargest`.

- After the loop, `secondLargest` holds the answer.

---

## 📝 Notes

- The function iterates through the array only **once** (O(n) time complexity) ⏱️.

- It keeps track of the **largest** and **second largest** numbers found so far.

- If the array contains duplicate largest numbers, the second largest will still be correct.

- Make sure the array has at least two unique numbers for a valid result! ⚠️

---

Happy Coding! 😃✨
