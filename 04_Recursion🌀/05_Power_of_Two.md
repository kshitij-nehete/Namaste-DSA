# 🔋 Power of Two

Determine whether a given integer is a power of two. This can be solved neatly with recursion by continuously dividing by 2! 🚀

## 📝 Problem Statement

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`. An integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.

- LeetCode Problem Link: https://leetcode.com/problems/power-of-two/

## 💡 Approach

- **Base Case**:
  - If `n === 1`, it is `2^0`, so return `true`.
  - If `n === 0` or `n` is odd (`n % 2 !== 0`), it cannot be a power of two, so return `false`.
- **Recursive Case**:
  - If `n` is even and greater than 1, divide by 2 and recurse: `return isPowerOfTwo(n / 2)`.
- Each recursive call reduces the problem size by half, converging on the base cases.

## 🛠️ Solution

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  } else if (n === 0 || n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};

// Example usage:
console.log(isPowerOfTwo(1)); // true  (2^0)
console.log(isPowerOfTwo(16)); // true  (2^4)
console.log(isPowerOfTwo(218)); // false
```

## 🧠 Explanation

1. **Check for 1**:  
   `n === 1` → `true` immediately (1 is 2⁰).
2. **Reject 0 or odd**:  
   `n === 0` or `n % 2 !== 0` → `false`.
3. **Divide-and-Conquer**:  
   If `n` is even and >1, divide by 2 and recurse. Since powers of two remain even until they reach 1, this reliably tests membership.

This runs in O(log n) time (each step halves `n`) and uses O(log n) space due to the recursion stack.

## 📝 Notes

- Edge cases: negative numbers and zero return `false`.
- Recursive depth is at most `log₂(n)`.
- An iterative or bitwise approach can achieve O(1) space.

### 🔄 Alternative Bitwise Solution

```js
var isPowerOfTwo = function (n) {
  // A power of two in binary has exactly one '1' bit.
  return n > 0 && (n & (n - 1)) === 0;
};
```

This bitwise trick runs in O(1) time and O(1) space.
