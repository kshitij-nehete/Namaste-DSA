# 🚀 Basics

## 📝 Two Steps to Solve DSA Questions

1. 💡 **Think & Plan:** Decide how to approach and solve the question.

2. 💻 **Code:** Implement your solution.

---

## ⏳ Spaced Repetition

> Suppose you solve a problem—after one or two weeks, come back and solve it again without any help.

---

## 🟦 JavaScript Basics

- **const:** ❌ Cannot be redeclared (use for values that never change)

- **let:** 🔄 Value can be changed (use for variables that may change)

_let is mostly used in DSA_

### ➕ String & Number Operations

- `7 + 7 = 14` (number + number = number)

- `"Kshitij" + "Nehete" = KshitijNehete` (string + string = string)

- `"Kshitij" + 7 = Kshitij7` (string + number = string)

- `"7" + 7 = 77` (string + number = string)

---

## 📚 Array

```js
let arr = [2, 4, 5]; // Array can contain string, numbers, boolean, and arrays

arr[1] = 4;

arr[3] = undefined;

let arr1 = [2, "Dhoni", true];
```

**Explanation:**

- Arrays are used to store multiple values in a single variable.

- You can access elements by their index (starting from 0).

- Arrays can hold different data types.

---

## 🗂️ Object

_Contains key-value pairs_

```js
let obj = {
  a: 7,

  b: "Dhoni",

  c: true,
};

obj.b = "Dhoni";
```

**Explanation:**

- Objects store data in key-value pairs.

- You can access or update values using the key.

---

## 🧩 Functions

### 1️⃣ Greet Function

```js
function greet(name) {
  console.log("Namaste, " + name);
}

greet("Dhoni"); // Output: Namaste, Dhoni
```

**Explanation:**

- Functions help you reuse code.

- This function prints a greeting with the provided name.

---

### 2️⃣ Square Function

```js
function square(a) {
  let result = a * a;

  return result; // Need to collect this value in a variable to print
}

let value = square(2); // Output: 4
```

**Explanation:**

- This function returns the square of a number.

- The result is returned and can be stored in a variable.

---

### 3️⃣ Eligible for Vote

```js
function eligibleForVote(name, age) {
  if (age > 18) {
    console.log(`${name} is eligible to vote`);
  } else {
    console.log(`${name} is not eligible to vote`);
  }
}

eligibleForVote("Dhoni", 36);
```

**Explanation:**

- Checks if a person is eligible to vote based on age.

- Uses an if-else statement to print the result.

---

### 4️⃣ Even or Odd

```js
function isEvenOdd(num) {
  let rem = num % 2;

  if (rem == 0) {
    console.log("Num is even");
  } else {
    console.log("Num is odd");
  }
}
```

**Explanation:**

- Checks if a number is even or odd using the modulus operator `%`.

- Prints the result accordingly.

---

## 📝 Notes

- Use `let` for variables that change, and `const` for constants.

- Arrays and objects are fundamental data structures in JavaScript.

- Functions help you organize and reuse code efficiently.

- Practice spaced repetition to strengthen your DSA skills! ⏳

- Always plan your approach before jumping into coding. 💡

---

## 📖 Problem & Solution Explanation

This document introduces the basics of JavaScript that are essential for Data Structures and Algorithms (DSA).

It covers variable declarations, data types, arrays, objects, and functions with practical code examples and explanations.

By understanding these concepts, you'll be able to solve DSA problems efficiently and write clean, reusable code.

Remember to always plan your approach before coding and practice regularly for mastery! 🚀
