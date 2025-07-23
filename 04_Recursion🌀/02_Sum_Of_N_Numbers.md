Based on your code for the Sum of N Numbers problem, here's the Markdown formatted version:

# ➕ Sum of N Numbers

Calculate the sum of first N natural numbers using recursion. This demonstrates how recursion can elegantly solve mathematical problems! 🔢

## 📝 Problem Statement

Given a positive integer `n`, calculate the sum of all natural numbers from 1 to n using recursion.

For example: Sum of first 5 numbers = 1 + 2 + 3 + 4 + 5 = 15

## 💡 Approach

- **Base Case**: When `num` equals 0, return 0 (no more numbers to add)
- **Recursive Case**: Return current number plus the sum of all numbers before it
- Each recursive call reduces the problem size by 1, moving towards the base case

## 🛠️ Solution

```js
// Sum of n numbers
function sumOfNNumber(num) {
  if (num == 0) {
    return num;
  }

  return num + sumOfNNumber(num - 1);
}

let n = 5;
let result = sumOfNNumber(n);
console.log(result); // Output: 15
```

## 🧠 Explanation

**Base Case**: `if (num == 0) return num;` - When we reach 0, we stop the recursion
**Recursive Case**: `return num + sumOfNNumber(num - 1);` - Add current number to sum of remaining numbers

### How it works for `sumOfNNumber(5)`:

- `sumOfNNumber(5)` returns `5 + sumOfNNumber(4)`
- `sumOfNNumber(4)` returns `4 + sumOfNNumber(3)`
- `sumOfNNumber(3)` returns `3 + sumOfNNumber(2)`
- `sumOfNNumber(2)` returns `2 + sumOfNNumber(1)`
- `sumOfNNumber(1)` returns `1 + sumOfNNumber(0)`
- `sumOfNNumber(0)` returns `0` (base case)

Results cascade back: `5 + 4 + 3 + 2 + 1 + 0 = 15`

## 🖨️ Output

```
15
```

## 📝 Notes

- **Time Complexity**: O(n) - makes n recursive calls
- **Space Complexity**: O(n) - due to call stack (each call uses stack space)
- **Mathematical Formula**: Sum = n × (n + 1) / 2 (iterative O(1) solution exists)
- This recursive approach demonstrates the concept well, though iterative solution is more efficient
- Each recursive call moves one step closer to the base case by decrementing `num`

## 🔄 Alternative Iterative Solution

```js
function sumOfNNumberIterative(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

The recursive solution is more intuitive and demonstrates the recursive thinking pattern, while the iterative solution is more space-efficient.
