# 🔄 Loop within a Loop (Nested Loops)

Nested loops are loops inside other loops. They are useful for working with multi-dimensional data or when you need to compare elements in pairs. 🧩

---

## 1️⃣ Basic Nested Loop

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`Value of i: ${i} and Value of j: ${j}`);
  }
}
```

### 🧠 Explanation

- The **outer loop** runs with `i` from 0 to 2.

- For each value of `i`, the **inner loop** runs with `j` from 0 to 2.

- This means for every single value of `i`, the inner loop completes all its iterations.

- The output will show all combinations of `i` and `j` from 0 to 2.

#### 🖨️ Output

```

Value of i: 0 and Value of j: 0

Value of i: 0 and Value of j: 1

Value of i: 0 and Value of j: 2

Value of i: 1 and Value of j: 0

Value of i: 1 and Value of j: 1

Value of i: 1 and Value of j: 2

Value of i: 2 and Value of j: 0

Value of i: 2 and Value of j: 1

Value of i: 2 and Value of j: 2

```

---

## 2️⃣ Nested Loop with Dependent Inner Loop

```js
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(`Value of i: ${i} and Value of j: ${j}`);
  }
}
```

### 🧠 Explanation

- The **outer loop** runs with `i` from 0 to 2.

- The **inner loop** starts with `j = i` and runs as long as `j > 0`, decrementing `j` each time.

- For `i = 0`, the inner loop doesn't run because `j` is not greater than 0.

- For `i = 1`, the inner loop runs once (`j = 1`).

- For `i = 2`, the inner loop runs twice (`j = 2` and `j = 1`).

- This pattern is useful when you want the number of inner loop iterations to depend on the outer loop variable.

#### 🖨️ Output

```

Value of i: 1 and Value of j: 1

Value of i: 2 and Value of j: 2

Value of i: 2 and Value of j: 1

```

---

## 📝 Notes

- Nested loops are powerful for working with grids, matrices, or comparing pairs of elements.

- Be careful: nested loops can increase time complexity (O(n²)), so use them wisely! ⏳

- Practice visualizing how the inner and outer loops interact to master nested iteration. 🧠
