# 🔢 Count Digits in a Number

Counting the number of digits in a number is a common problem in programming and interviews. Let's see how to solve it in JavaScript! 🚀

---

## 1️⃣ Problem Statement

Write a function that returns the count of digits in a given number.

---

## 2️⃣ Solution

```js
function countDigit(num) {
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10); // Math.floor is used to remove the decimal part

    count++;
  }

  return count;
}

let num = 369;

let result = countDigit(num);

console.log(result);
```

---

## 🧠 Explanation

- We initialize a counter `count` to 0.

- We use a `while` loop that runs as long as `num > 0`.

- In each iteration, we divide `num` by 10 and remove the decimal part using `Math.floor()`. This effectively removes the last digit.

- We increment the counter for each digit removed.

- When `num` becomes 0, the loop stops, and we return the count.

---

## 🖨️ Output

```

3

```

---

## ⚠️ Corner Cases

- **If the number is 0:**

The function above will return 0, but mathematically, 0 has 1 digit.

**Fix:** Add a check at the start:

`if(num === 0) return 1;`

- **If the number is negative:**

The function will not work as expected for negative numbers.

**Fix:** Use `num = Math.abs(num);` at the start to handle negatives.

---

## ✅ Improved Solution (Handles Corner Cases)

```js
function countDigit(num) {
  num = Math.abs(num); // Handle negative numbers

  if (num === 0) return 1; // Handle zero

  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);

    count++;
  }

  return count;
}

console.log(countDigit(369)); // Output: 3
console.log(countDigit(0)); // Output: 1
console.log(countDigit(-1234)); // Output: 4
```

**Output:**

```

3

1

4

```

---

## 📝 Notes

- Always consider edge cases like 0 and negative numbers in digit counting problems.

- This approach works for integers. For decimals, you may need a different logic.

- Counting digits is a fundamental operation in many number-based algorithms! 🔢

---
