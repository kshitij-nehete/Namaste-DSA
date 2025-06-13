# 🔁 Loops 1

## 🔹 For Loop

_For loops are very important in DSA._

### 1️⃣ Print "Hello World" 20 times

```js
for (let i = 0; i < 20; i++) {
  console.log(i + 1 + " Hello World");
}
```

#### 🧠 Explanation

- The `for` loop starts with `i = 0` and runs while `i < 20`.

- On each iteration, it prints the current count (i + 1) followed by "Hello World".

- This repeats exactly 20 times, making it perfect for fixed repetitions.

---

### 2️⃣ Calculate Length of Array & Print Elements

```js
let arr = [1, 2, 3, 5];

arr.length;

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

#### 🧠 Explanation

- `arr.length` gives the total number of elements in the array.

- The `for` loop runs from `i = 0` to `i < arr.length`, ensuring every element is accessed.

- `console.log(arr[i])` prints each element one by one.

---

## 🔸 While Loop

### 1️⃣ Print "Hello" 5 times with while loop

```js
let i = 0;

while (i < 5) {
  console.log("Hello");

  i++;
}
```

#### 🧠 Explanation

- The `while` loop checks the condition `i < 5` before each iteration.

- Inside the loop, "Hello" is printed and `i` is incremented.

- The loop stops after printing "Hello" 5 times.

---

## 📝 Notes

- Loops help you repeat actions efficiently in code. 🔄

- Use `for` loops when you know how many times to repeat.

- Use `while` loops when the number of repetitions depends on a condition.

- Arrays have a `.length` property to help you loop through all elements.

- Practice writing loops to get comfortable with iteration in JavaScript! 🚀

---
