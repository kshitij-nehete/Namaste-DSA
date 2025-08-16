# 🏅 Selection Sort

Selection sort is a simple in-place comparison sorting algorithm. It repeatedly selects the minimum (or maximum) element from the unsorted part of the array and moves it to its correct position.

---

## 📝 How Selection Sort Works

1. **Find the minimum element** from the unsorted part of the array.
2. **Swap it** with the first element of the unsorted region.
3. **Move the boundary** of the sorted region to the right by one.
4. **Repeat** until all elements are sorted.

---

## 🛠️ Corrected Solution

Your original code contains variable name inconsistencies. Here's a corrected and standard version:

```js
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // Swap the found minimum with the element at i
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

// Example usage:
let array = [64, 25, 12, 22, 11];
console.log("Original:", array);
console.log("Sorted:", selectionSort([...array])); // Output: [11, 12, 22, 25, 64]
```

---

## 🔍 Dry Run of Selection Sort

Let's dry run `selectionSort([64,tep by step:

### **Initial Array**:

[64, 25,\*Pass 1 (i = 0):\*\*

- Find min in index 0–4: min = 11 (index 4)
- Swap arr and arr[1]
- Array: [11, 25, 12,Pass 2 (i = 1):\*\*
- Find min in index 1–4: min = 12 (index 2)
- Swap arr and arr[2][3]
- Array: [11, 12, 25,Pass 3 (i = 2):\*\*
- Find min in index 2–4: min = 22 (index 3)
- Swap arr and arr[3][4]
- Array: [11, 12, 22,Pass 4 (i = 3):\*\*
- Find min in index 3–4: min = 25 (index 3)
- Swap arr and arr (no change)[4]
- Array: [11,further passes needed.

**Final Sorted Array:**  
[11,\*

## 🧠 Key Observations

- After each outer loop, the leftmost unsorted element is the smallest in the remaining array.
- Number of passes: `n-1` for array of size `n`.
- The algorithm always performs the same number of comparisons, regardless of initial order.

---

## 📊 Complexity Analysis

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1) (in-place)
- **Stability:** Not stable by default (can be modified for stability)
- **Best for:** Small or nearly sorted arrays

---

## 📝 Notes

- Simple, easy to implement.
- Not efficient on large datasets compared to more advanced algorithms (like quicksort or mergesort).
- Useful for understanding basic sorting principles.
