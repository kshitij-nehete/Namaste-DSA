
# 🔀 Insertion Sort

Insertion sort builds the sorted array one element at a time by repeatedly taking the next element and inserting it into its correct position among the already sorted elements.

***

## 📝 How Insertion Sort Works

1. **Start from the second element** (index 1) as the first element is considered sorted
2. **Compare the current element** with elements in the sorted portion (to its left)
3. **Shift larger elements** to the right to make space
4. **Insert the current element** in its correct position
5. **Repeat** for all remaining elements

***

## 🛠️ Corrected Solution

*Note: Your original code had a syntax error in the while condition that I've fixed below:*

```js
function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {  // Start from index 1, not 0
    let curr = arr[i];
    let prev = i - 1;

    // Shift elements that are greater than curr to the right
    while (prev >= 0 && arr[prev] > curr) {  // Fixed: removed extra bracket
      arr[prev + 1] = arr[prev]; // Shift element to the right
      prev--;
    }

    arr[prev + 1] = curr; // Place the current element in the correct position
  }

  return arr;
}

// Example usage:
let array = [64, 25, 12, 22, 11];
console.log("Original:", array);
console.log("Sorted:", insertionSort([...array])); // Output: [11, 12, 22, 25, 64]
```


***

## 🔍 Dry Run of Insertion Sort

Let's trace through `insertionSort()` step by step:

**Initial Array**: ``

### **Pass 1 (i = 1, curr = 25)**

| Step | prev | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | `64 > 25` | Shift 64 right | `` |
| 2 | -1 | Exit loop | Insert 25 at index 0 | `` |

**After Pass 1**: `` ✅ **First 2 elements sorted**

### **Pass 2 (i = 2, curr = 12)**

| Step | prev | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 1 | `64 > 12` | Shift 64 right | `` |
| 2 | 0 | `25 > 12` | Shift 25 right | `` |
| 3 | -1 | Exit loop | Insert 12 at index 0 | `` |

**After Pass 2**: `` ✅ **First 3 elements sorted**

### **Pass 3 (i = 3, curr = 22)**

| Step | prev | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 2 | `64 > 22` | Shift 64 right | `` |
| 2 | 1 | `25 > 22` | Shift 25 right | `` |
| 3 | 0 | `12 < 22` | Exit loop | Insert 22 at index 1 |

**After Pass 3**: `` ✅ **First 4 elements sorted**

### **Pass 4 (i = 4, curr = 11)**

| Step | prev | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 3 | `64 > 11` | Shift 64 right | `` |
| 2 | 2 | `25 > 11` | Shift 25 right | `` |
| 3 | 1 | `22 > 11` | Shift 22 right | `` |
| 4 | 0 | `12 > 11` | Shift 12 right | `` |
| 5 | -1 | Exit loop | Insert 11 at index 0 | `` |

**Final Result**: `` ✅ **Completely Sorted!**

***

## 🧠 Visual Representation

Here's how the sorting progresses:

```
Initial:  [64, 25, 12, 22, 11]
          
Pass 1:   [25, 64] 12, 22, 11    ← Insert 25
Pass 2:   [12, 25, 64] 22, 11    ← Insert 12  
Pass 3:   [12, 22, 25, 64] 11    ← Insert 22
Pass 4:   [11, 12, 22, 25, 64]   ← Insert 11

Sorted:   [11, 12, 22, 25, 64] ✅
```


***

## 🧠 Key Observations

1. **Left side is always sorted** - we maintain a sorted subarray on the left
2. **One element at a time** - we process one element from the unsorted portion in each iteration
3. **Shifting vs Swapping** - we shift multiple elements to make room, rather than swapping
4. **Adaptive** - performs well on nearly sorted arrays
5. **Stable** - maintains relative order of equal elements

***

## 📊 Complexity Analysis

- **Time Complexity**:
    - **Best Case**: O(n) - when array is already sorted
    - **Average Case**: O(n²)
    - **Worst Case**: O(n²) - when array is reverse sorted
- **Space Complexity**: O(1) - in-place sorting
- **Stability**: Yes - equal elements maintain relative order

***

## 📝 Notes

- **Efficient for small arrays** or nearly sorted data
- **Online algorithm** - can sort data as it's received
- **Adaptive** - performance improves with partially sorted input
- **Simple implementation** - easy to understand and code
- **Better than bubble/selection sort** for small datasets
- **Used as subroutine** in hybrid algorithms like Timsort

***

## 🔄 Alternative Implementation (More Intuitive)

```js
function insertionSortAlternative(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Place key in its correct position
    arr[j + 1] = key;
  }
  return arr;
}
```

Insertion sort is like **sorting playing cards in your hand** - you pick up cards one by one and insert each into its proper position among the cards you've already sorted! 🃏

