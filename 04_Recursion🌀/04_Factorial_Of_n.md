# 🔢 Factorial of N

Calculate the factorial of a number using recursion. This is a classic example that perfectly demonstrates the power of recursive thinking! ✨

## 📝 Problem Statement

Given a positive integer `n`, calculate its factorial (n!) using recursion.

Factorial is defined as: n! = n × (n-1) × (n-2) × ... × 2 × 1

For example: 5! = 5 × 4 × 3 × 2 × 1 = 120

## 💡 Approach

- **Base Case**: When `num` equals 0, return 1 (by definition, 0! = 1)
- **Recursive Case**: Return current number multiplied by factorial of (num-1)
- Each recursive call reduces the problem size by 1, moving towards the base case

## 🛠️ Solution

```js
// Factorial of n
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120
```

## 🧠 Explanation

**Base Case**: `if(num === 0) return 1;` - Factorial of 0 is 1 by mathematical definition
**Recursive Case**: `return num * factorial(num - 1);` - Multiply current number by factorial of previous number

### How it works for `factorial(5)`:

- `factorial(5)` returns `5 * factorial(4)`
- `factorial(4)` returns `4 * factorial(3)`
- `factorial(3)` returns `3 * factorial(2)`
- `factorial(2)` returns `2 * factorial(1)`
- `factorial(1)` returns `1 * factorial(0)`
- `factorial(0)` returns `1` (base case)

Results cascade back: `5 × 4 × 3 × 2 × 1 × 1 = 120`

## 🖨️ Output

```
120
```

## 📝 Notes

- **Time Complexity**: O(n) - makes n recursive calls
- **Space Complexity**: O(n) - due to call stack (each call uses stack space)
- **Mathematical Definition**: 0! = 1 and n! = n × (n-1)! for n > 0
- This is one of the most intuitive examples of recursion in mathematics
- Each recursive call moves one step closer to the base case by decrementing `num`
- The solution directly mirrors the mathematical definition of factorial

## 🔄 Alternative Solutions

### Iterative Approach

```js
function factorialIterative(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
```

### With Edge Case Handling

```js
function factorialWithValidation(num) {
  if (num < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialWithValidation(num - 1);
}
```
