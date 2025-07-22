# 🔄 Recursion

Recursion - Function calls itself to solve smaller version of the same problem.

Two parts of recursion -

1. **Base Case**: Stop condition (when to stop calling itself)
2. **Recursive Case**: Part where function calls itself

## 📋 Example: Factorial Function

Let's look at a classic factorial example highlighting both base case and recursive case:

```js
function factorial(n) {
  // Base Case - ALWAYS write this first!
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive Case - function calls itself
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

**Base Case Highlighted**: `if (n === 0 || n === 1) return 1;` - Stops when n reaches 0 or 1
**Recursive Case Highlighted**: `return n * factorial(n - 1);` - Calls itself with smaller value

## 🔢 How Factorial Recursion Works

The factorial calculation follows the mathematical definition: n! = n × (n-1)!

For `factorial(5)`, the execution unfolds as:

- `factorial(5)` returns `5 * factorial(4)`
- `factorial(4)` returns `4 * factorial(3)`
- `factorial(3)` returns `3 * factorial(2)`
- `factorial(2)` returns `2 * factorial(1)`
- `factorial(1)` returns `1` (base case reached)

Then the results cascade back: `5 * 4 * 3 * 2 * 1 = 120`

## 📊 Example: Print Numbers 1 to N

```js
function print(x, n) {
  // Base Case - ALWAYS write this first!
  if (x > n) {
    return; // Stop when x exceeds n
  }

  console.log(x); // Print current number
  print(x + 1, n); // Recursive Case - call with next number
}

let n = 10;
print(1, n); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

**Base Case Highlighted**: `if (x > n) return;` - Prevents infinite recursion
**Recursive Case Highlighted**: `print(x + 1, n);` - Calls function with incremented value

## 🧠 Key Points

- **Base Case**: The terminating condition that stops recursion from continuing indefinitely
- **Recursive Case**: The part where the function calls itself with modified parameters that bring it closer to the base case
- Without a proper base case, the function will call itself infinitely, causing a stack overflow error
- Each recursive call should make progress toward the base case by working with a "smaller" version of the problem

## 📈 Recursion vs Iteration

Both approaches can solve the same problems. Here's a comparison using factorial:

**Recursive Approach**:

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
```

**Iterative Approach**:

```js
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

Recursion often leads to more readable and intuitive code for problems that naturally break down into subproblems.

## When to use Recursion

- Problem can be broken into sub problems
- Trees & Graphs (Will learn this in lateral topics)
- Backtracking, DP, Divide & Conquer (Will learn this in lateral topics)
