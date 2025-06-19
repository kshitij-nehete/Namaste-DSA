# ✨ Star & Number Patterns in JavaScript

Pattern problems are a great way to practice nested loops and understand how to control output formatting. Below are several classic star and number pattern problems, their solutions, explanations, and sample outputs. 🌟

---

## 1️⃣ Square Star Pattern

```js
function startPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j < num; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
}

startPattern(4);
```

**Explanation:**

- Prints a square of stars with `num` rows and `num` columns.

- Both loops run `num` times, so you get a grid of stars.

**Output:**

```

* * * *

* * * *

* * * *

* * * *

```

---

## 2️⃣ Right-Angled Triangle Star Pattern

```js
function starPatter(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
}

starPatter(5);
```

**Explanation:**

- Outer loop for rows, inner loop for columns.

- Each row prints one more star than the previous, forming a right-angled triangle.

**Output:**

```

*

* *

* * *

* * * *

* * * * *

```

---

## 3️⃣ Number Triangle (Same Number per Row)

```js
function numberPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = `${row} ${i + 1}`;
    }

    console.log(row);
  }
}

numberPattern(5);
```

**Explanation:**

- Each row prints the same number (row index + 1), repeated as many times as the row number.

**Output:**

```

 1

 2 2

 3 3 3

 4 4 4 4

 5 5 5 5 5

```

---

## 4️⃣ Number Triangle (Increasing Numbers per Row)

```js
function numberPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }

    console.log(row);
  }
}

numberPattern(5);
```

**Explanation:**

- Each row prints numbers starting from 1 up to the row number.

**Output:**

```

1

12

123

1234

12345

```

---

## 5️⃣ Inverted Number Triangle

```js
function numberPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j < num - i; j++) {
      row = row + (j + 1);
    }

    console.log(row);
  }
}

numberPattern(5);
```

**Explanation:**

- Starts with the maximum numbers in the first row, decreasing by one each row.

**Output:**

```

12345

1234

123

12

1

```

---

## 6️⃣ Inverted Star Triangle

```js
function starPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j < num - i; j++) {
      row = row + " *";
    }

    console.log(row);
  }
}

starPattern(5);
```

**Explanation:**

- Prints stars in decreasing order per row, forming an inverted triangle.

**Output:**

```

 * * * * *

 * * * *

 * * *

 * *

 *

```

---

## 7️⃣ Right-Aligned Triangle Star Pattern

```js
function starPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = ""; // Add spaces for alignment

    for (let j = 0; j < num - (i + 1); j++) {
      row = row + " ";
    } // Add stars

    for (let k = 0; k <= i; k++) {
      row = row + "*";
    }

    console.log(row);
  }
}

starPattern(5);
```

**Explanation:**

- First loop adds spaces to shift stars to the right.

- Second loop adds the stars, creating a right-aligned triangle.

**Output:**

```

    *

   **

  ***

 ****

*****

```

---

## 8️⃣ 1-0 Pattern (Alternating in Each Row)

**Approach One:**

```js
function oneZeroPatternApproachOne(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      if (j % 2 === 0) {
        row = row + "1";
      } else {
        row = row + "0";
      }
    }

    console.log(row);
  }
}

oneZeroPatternApproachOne(5);
```

**Approach Two:**

```js
function oneZeroPatternApproachTwo(num) {
  for (let i = 0; i < num; i++) {
    let row = "";

    let toggle = 1;

    for (j = 0; j <= i; j++) {
      row = row + toggle; // Switch the toggle

      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }

    console.log(row);
  }
}

oneZeroPatternApproachTwo(5);
```

**Explanation:**

- Both approaches print rows with alternating 1s and 0s.

- The first uses the column index to decide, the second uses a toggle variable.

**Output:**

```

1

10

101

1010

10101

```

---

## 9️⃣ Random 0-1 Pattern (Toggle Across Rows)

```js
function randomZeroOnePatterm(num) {
  let toggle = 1;

  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + toggle;

      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }

    console.log(row);
  }
}

randomZeroOnePatterm(5);
```

**Explanation:**

- The toggle variable is declared outside the outer loop, so the 1-0 alternation continues across all rows, not just within a row.

**Output:**

```

1

01

010

1010

10101

```

---

## 📝 Notes

- Pattern problems are great for practicing nested loops and understanding how to control output.

- Pay attention to how you build each row (spaces, stars, numbers, toggles).

- Try changing the `num` value to see how the patterns scale! 🔢

- These patterns are common in coding interviews and help build logical thinking. 💡
