# 🔄 Recursion Master Class

## What is Fibonacci Number?

The Fibonacci sequence is a mathematical series in which each number is the sum of the last two preceding ones.

**Fibonacci Sequence**: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

**Mathematical Definition**:

- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) for n > 1

Recursion is a technique where a function solves a problem by calling itself on smaller sub-problems.

## 📋 Examples

### 1️⃣ Basic Fibonacci Examples

Let's trace through some Fibonacci numbers:

- **F(0)** = 0
- **F(1)** = 1
- **F(2)** = F(1) + F(0) = 1 + 0 = **1**
- **F(3)** = F(2) + F(1) = 1 + 1 = **2**
- **F(4)** = F(3) + F(2) = 2 + 1 = **3**
- **F(5)** = F(4) + F(3) = 3 + 2 = **5**
- **F(6)** = F(5) + F(4) = 5 + 3 = **8**

### 2️⃣ Recursive Fibonacci Implementation

```js
/**
 * Calculate the nth Fibonacci number using recursion
 * @param {number} n
 * @return {number}
 */
function fibonacci(n) {
  // Base Cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive Case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Examples:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
```

### 3️⃣ How Fibonacci Recursion Works

Let's trace `fibonacci(5)` step by step:

```
fibonacci(5)
├── fibonacci(4) + fibonacci(3)
    ├── fibonacci(3) + fibonacci(2)     ├── fibonacci(2) + fibonacci(1)
        ├── fibonacci(2) + fibonacci(1)     ├── fibonacci(1) + fibonacci(0)
            ├── fibonacci(1) + fibonacci(0)     └── 1 + 0 = 1
            └── 1 + 0 = 1               └── 1 (base case)
        └── 1 (base case)
    └── 1 + 1 = 2               └── 1 + 1 = 2
└── 2 + 3 = 5

Final Result: 5
```

### 4️⃣ Real-World Fibonacci Examples

**Nature Examples**:

- 🌻 **Sunflower Seeds**: Arranged in Fibonacci spirals (21, 34, 55, 89)
- 🐚 **Nautilus Shell**: Growth follows Fibonacci ratios
- 🌿 **Flower Petals**: Many flowers have Fibonacci numbers of petals
  - Lily: 3 petals
  - Buttercup: 5 petals
  - Daisy: 34, 55, or 89 petals

**Golden Ratio**: As Fibonacci numbers get larger, the ratio between consecutive numbers approaches φ (phi) ≈ 1.618

### 5️⃣ Fibonacci Variations

```js
// Print first n Fibonacci numbers
function printFibonacci(n) {
  console.log("First", n, "Fibonacci numbers:");
  for (let i = 0; i < n; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
  }
}

printFibonacci(8);
// Output:
// F(0) = 0
// F(1) = 1
// F(2) = 1
// F(3) = 2
// F(4) = 3
// F(5) = 5
// F(6) = 8
// F(7) = 13
```

### 6️⃣ Optimized Fibonacci (Memoization)

```js
// Optimized version using memoization
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(40)); // Much faster than basic recursion!
```

### 7️⃣ Iterative Fibonacci (For Comparison)

```js
function fibonacciIterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
```

## 🧠 Key Concepts

**Recursion Components in Fibonacci**:

- **Base Cases**: F(0) = 0, F(1) = 1
- **Recursive Relation**: F(n) = F(n-1) + F(n-2)
- **Subproblem**: Each call breaks down into two smaller Fibonacci calculations

## 📈 Complexity Analysis

- **Time Complexity**: O(2^n) - exponential (basic recursion)
- **Space Complexity**: O(n) - due to recursion stack depth
- **Optimized with Memoization**: O(n) time, O(n) space

## 📝 Notes

- Fibonacci demonstrates the beauty and power of recursion
- Classic example of overlapping subproblems (dynamic programming)
- Shows how mathematical sequences can be elegantly expressed recursively
- Important to understand both recursive and iterative approaches
- Memoization transforms exponential time complexity to linear

The Fibonacci sequence perfectly illustrates how recursion mirrors mathematical definitions, making complex problems intuitive to solve! 🌟
