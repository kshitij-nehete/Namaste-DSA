# 🔄 Palindrome Number Checker

A palindrome number is a number that reads the same backward as forward (e.g., 121, 1331). Let's check if a number is a palindrome in JavaScript! 🚀

---

## 1️⃣ Problem Statement

Write a function that returns `true` if a given number is a palindrome, and `false` otherwise.

---

## 2️⃣ Solution

```js
function isPalindrome(num) {
  if (num < 0) {
    return false;
  }

  let originalNum = num;

  let rev = 0;

  while (num > 0) {
    let rem = num % 10;

    rev = 10 * rev + rem;

    num = Math.floor(num / 10);
  }

  return rev === originalNum; // Return true or false
}

let num1 = 1234;

let num2 = 12121;

let num3 = -777;

console.log(`${num1} is palindrome: ${isPalindrome(num1)}`);

console.log(`${num2} is palindrome: ${isPalindrome(num2)}`);

console.log(`${num3} is palindrome: ${isPalindrome(num3)}`);
```

---

## 🧠 Explanation

- If the number is negative, the function returns `false` (negative numbers are not palindromes).

- The original number is stored in `originalNum`.

- The number is reversed by extracting digits one by one and building `rev`.

- After the loop, we compare the reversed number with the original:

- If they are equal, the function returns `true` (it's a palindrome).

- Otherwise, it returns `false`.

---

## 🖨️ Output

```

1234 is palindrome: false

12121 is palindrome: true

-777 is palindrome: false

```

---

## 📝 Notes

- Negative numbers are not considered palindromes.

- This approach works for any positive integer.

- Palindrome checks are common in coding interviews and help build logic for string/number
