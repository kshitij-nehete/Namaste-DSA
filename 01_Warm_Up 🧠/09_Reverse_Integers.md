# 🔄 Reverse Integer

Reversing the digits of an integer is a common coding interview problem. Let's see how to solve it in JavaScript, including handling edge cases like 32-bit integer overflow! 🚀

---

## 1️⃣ Problem Statement

Given a signed 32-bit integer `x`, return `x` with its digits reversed.

If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2³¹, 2³¹ - 1]`, then return `0`.

---

## 2️⃣ Solution

```js
function reverseInterger(num) {
  let originalCopy = num;

  let rev = 0;

  num = Math.abs(num);

  while (num > 0) {
    let lastNum = num % 10;

    rev = rev * 10 + lastNum;

    num = Math.floor(num / 10);
  }

  let limit = Math.pow(2, 31); // or use 2 ** 31

  if (rev < -limit || rev > limit) return 0;

  return originalCopy > 0 ? rev : -rev;
}

let num1 = -321;

let result = reverseInterger(num1);

console.log(result);

let num2 = -32156768683;

let result2 = reverseInterger(num2);

console.log(result2);
```

---

## 🧠 Explanation

- We store the original number to restore its sign at the end.

- We take the absolute value of the number to reverse its digits easily.

- In the loop, we extract the last digit (`num % 10`) and build the reversed number (`rev`).

- After reversing, we check if the result is within the 32-bit signed integer range:

- If not, return `0` (as per the problem statement).

- Finally, we return the reversed number with the original sign.

---

## 🖨️ Output

```

-123

0

```

- For `-321`, the reversed number is `-123` (within range).

- For `-32156768683`, the reversed number exceeds the 32-bit integer limit, so the function returns `0`.

---

## 📝 Notes

- Always check for integer overflow when reversing numbers in coding interviews.

- Using `Math.abs()` helps handle negative numbers easily.

- This approach works for both positive and negative
