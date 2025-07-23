Based on your code for array sum problems using recursion, here's the Markdown formatted version:

# 🔢 Array Sum Problems with Recursion

Two common array problems solved using recursion: summing all elements and summing only odd elements. Let's explore both approaches! 📊

## 1️⃣ Sum of All Numbers from an Array

### 📝 Problem Statement

Given an array of numbers, calculate the sum of all elements using recursion.

### 💡 Approach

- **Base Case**: When index reaches 0, return the first element
- **Recursive Case**: Add current element to the sum of remaining elements
- Start from the last index and work backwards to index 0

### 🛠️ Solution

```js
// Sum of all numbers from an array
function sumOfAllNumInArray(n) {
  if (n == 0) {
    return arr[n];
  }

  return arr[n] + sumOfAllNumInArray(n - 1);
}

let arr = [4, 0, 2, 4, 9];
let result = sumOfAllNumInArray(arr.length - 1);
console.log(result); // Output: 19
```

### 🧠 Explanation

**Base Case**: `if(n == 0) return arr[n];` - When we reach the first element, return it
**Recursive Case**: `return arr[n] + sumOfAllNumInArray(n - 1);` - Add current element to sum of previous elements

#### How it works for ``:

- `sumOfAllNumInArray(4)` returns `arr + sumOfAllNumInArray(3)` → `9 + ...`
- `sumOfAllNumInArray(3)` returns `arr + sumOfAllNumInArray(2)` → `4 + ...`
- `sumOfAllNumInArray(2)` returns `arr + sumOfAllNumInArray(1)` → `2 + ...`
- `sumOfAllNumInArray(1)` returns `arr + sumOfAllNumInArray(0)` → `0 + ...`
- `sumOfAllNumInArray(0)` returns `arr` → `4` (base case)

Results cascade back: `9 + 4 + 2 + 0 + 4 = 19`

## 2️⃣ Sum of All Odd Numbers in an Array

### 📝 Problem Statement

Given an array of numbers, calculate the sum of only the odd elements using recursion.

### 💡 Approach

- **Base Case**: When index reaches 0, return the first element if it's odd, otherwise return 0
- **Recursive Case**: Add current element (if odd) to the sum of remaining odd elements
- Use modulo operator to check if a number is odd

### 🛠️ Solution

```js
// Sum of all odd numbers in an array
function sumOfOddNumberInArray(n) {
  isOdd = arr[n] % 2 != 0;

  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }

  return (isOdd ? arr[n] : 0) + sumOfOddNumberInArray(n - 1);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = sumOfOddNumberInArray(arr.length - 1);
console.log(result); // Output: 16
```

### 🧠 Explanation

**Base Case**: `if (n == 0) return isOdd ? arr[n] : 0;` - Return first element if odd, else 0
**Recursive Case**: `return (isOdd ? arr[n] : 0) + sumOfOddNumberInArray(n - 1);` - Add current element (if odd) to sum of remaining odd elements

#### How it works for ``:

- `sumOfOddNumberInArray(6)` → `7` is odd → `7 + ...`
- `sumOfOddNumberInArray(5)` → `6` is even → `0 + ...`
- `sumOfOddNumberInArray(4)` → `5` is odd → `5 + ...`
- `sumOfOddNumberInArray(3)` → `4` is even → `0 + ...`
- `sumOfOddNumberInArray(2)` → `3` is odd → `3 + ...`
- `sumOfOddNumberInArray(1)` → `2` is even → `0 + ...`
- `sumOfOddNumberInArray(0)` → `1` is odd → `1` (base case)

Results cascade back: `7 + 0 + 5 + 0 + 3 + 0 + 1 = 16`

## 🖨️ Output

```
Problem 1: 19
Problem 2: 16
```

## 📝 Notes

- **Time Complexity**: O(n) for both solutions - visits each element once
- **Space Complexity**: O(n) - due to recursive call stack
- Both solutions work backwards from the last index to the first
- The odd number solution uses conditional logic to include only odd elements
- These recursive approaches demonstrate how to process arrays element by element
- Alternative iterative solutions would be more space-efficient but less educational for recursion concepts

## 🔄 Alternative Iterative Solutions

```js
// Iterative sum of all numbers
function sumAllIterative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Iterative sum of odd numbers
function sumOddIterative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
```
