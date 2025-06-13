# 🔁 Loops 2

---

## 1️⃣ Search Element in Array 🔍

Write a function that searches for an element in an array and returns the index. If the element is not present, return -1.

```js
function searchElement(arr, numberToSearch) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numberToSearch) {
      return i;
    }
  }

  return -1;
}

let arr1 = [4, 2, 0, 10, 8, 30];

let result = searchElement(arr1, 10);

console.log(result); // Output: 3
```

### 🧠 Explanation

- We loop through each element of the array.

- If the current element matches the number we are searching for, we return its index immediately.

- If the loop finishes without finding the number, we return -1 to indicate it's not present.

---

## 2️⃣ Count Negative Numbers ➖

Write a function that returns the number of negative numbers in an array.

```js
function countNegatives(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

let arr = [2, -9, 17, 1, -18, -4, 8, -7];

let result = countNegatives(arr);

console.log(result); // Output: 4
```

### 🧠 Explanation

- We initialize a counter to 0.

- For each element in the array, if it is negative, we increment the counter.

- After checking all elements, we return the total count of negative numbers.

---

## 3️⃣ Find Largest Number in Array 🏆

Write a function that returns the largest number in an array.

```js
function findLargetNumber(arr) {
  let largetNumber = -Infinity; // Start with the smallest possible number

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largetNumber) {
      largetNumber = arr[i];
    }
  }

  return largetNumber;
}

let arr = [5, 8, 9, 19, 23, 2];

let result = findLargetNumber(arr);

console.log(result); // Output: 23
```

### 🧠 Explanation

- We start with `largetNumber` set to `-Infinity` so any number in the array will be larger.

- As we loop through the array, if we find a number greater than our current `largetNumber`, we update it.

- After the loop, `largetNumber` holds the largest value in the array.

---

## 📝 Notes

- Use loops to traverse arrays and perform operations on each element. 🔄

- Searching and counting are common tasks in DSA and can be solved with simple loops.

- Always initialize variables like counters or max/min values before the loop.

- Practice writing these functions to build a strong foundation in array manipulation! 🚀

---
