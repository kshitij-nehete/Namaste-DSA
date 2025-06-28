# ⏱️ Time and Space Complexity

Understanding time and space complexity is crucial for writing efficient algorithms. This guide will help you grasp the basics, compare common algorithms, and visualize their growth. 🚀

---

## 🕒 Time Complexity

- **Time Complexity** measures the efficiency of an algorithm in terms of speed as the input size grows.

- Lower time complexity means better speed (the code runs faster).

- **Note:** Time complexity is not the same as the actual time taken; it's about how the number of operations grows with input size.

---

### 🔍 Linear Search vs. Binary Search

| Linear Search                      | Binary Search                       |

| ---------------------------------- | ----------------------------------- |

| Checks each element one by one     | Repeatedly divides the search space |

| Works on unsorted arrays           | Requires sorted arrays              |

| Time Complexity: O(n)              | Time Complexity: O(log n)           |

| Example: Find 7 in [1,2,3,4,5,6,7] | Example: Find 7 in [1,2,3,4,5,6,7]  |

#### How They Work

- **Linear Search:**

If there are `n` elements, it may run up to `n` times (worst case).

- Example: For 1000 elements, up to 1000 checks.

- **Binary Search:**

If there are `n` elements, it will run up to `log₂(n)` times (worst case).

- Example: For 1000 elements, `log₂(1000) ≈ 10` checks.

#### 📊 Growth Comparison Table

| n    | Linear Search (x = n) | Binary Search (x = log₂n) |

| ---- | --------------------- | ------------------------- |

| 10   | 10                    | 4                         |

| 100  | 100                   | 7                         |

| 1000 | 1000                  | 10                        |

#### 🏆 Best Case vs. Worst Case

- **Linear Search:**

- _Best Case:_ Element is at the first position (1 check).

- _Worst Case:_ Element is at the last position or not present (n checks).

- **Binary Search:**

- _Best Case:_ Element is at the middle (1 check).

- _Worst Case:_ Element is at either end or not present (`log₂n` checks).

**Conclusion:**

Binary Search is much more efficient than Linear Search for large, sorted datasets.

---

## 🅾️ Big O Notation

Big O notation is used to describe the worst-case time complexity of an algorithm.

- **Linear Search:** O(n)

- **Binary Search:** O(log n)

> O(log n) is much better (faster) than O(n) as n grows.

---

## 📈 Common Time Complexities

Below are some common time complexities, their meanings, and code examples:

| Complexity | Example Use Case    | Code Example / Description                              |

| ---------- | ------------------- | ------------------------------------------------------- |

| O(1)       | Constant time       | Accessing an array element                              |

| O(log n)   | Binary Search       | `n, n/2, n/4, ..., 1`                                   |

| O(n)       | Linear Search       | `for (i = 0; i < n; i++)`                               |

| O(n log n) | Merge Sort          | Binary Search inside a loop                             |

| O(n²)      | Nested Loops        | `for (i = 0; i < n; i++) { for (j = 0; j < n; j++) {}}` |

| O(n³)      | Triple Nested Loops | Three loops inside each other                           |

| O(2ⁿ)      | Exponential         | Recursive Fibonacci                                     |

| O(n!)      | Factorial           | Permutations                                            |

### 📊 Visual Growth (Relative Order)

```

O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

```

---

## 🧮 Space Complexity

- **Space Complexity** measures the amount of extra memory an algorithm uses as the input size grows.

- For example, if you create a new array of size n, the space complexity is O(n).

- If you only use a few variables, the space complexity is O(1) (constant space).

- Space complexity is important for large data or memory-constrained environments.

---

## ➕ Additional Notes

- When combining complexities, always keep the highest order term:

- O(n + n) → O(n)

- O(n³ + n + n²) → O(n³)

- O(n log n + n² + 2n) → O(n²)

- Ignore constants and lower-order terms for Big O notation.

---

## 📝 Summary Table

| Expression           | Big O Simplification |

| -------------------- | -------------------- |

| O(n + n)             | O(n)                 |

| O(n³ + n + n²)       | O(n³)                |

| O(n log n + n² + 2n) | O(n²)                |

---

## 🎯 Key Takeaways

- Time complexity measures speed; space complexity measures memory.

- Lower complexity = better efficiency.

- Use Big O notation to compare algorithms.

- For large, sorted data, prefer algorithms with lower time complexity (like Binary Search over Linear Search).

---
