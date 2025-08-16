# 🫧 Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

## 📝 Algorithm Description

The algorithm gets its name because smaller elements "bubble" to the top (beginning) of the list, just like air bubbles rising to the surface of water.

## 💡 How Bubble Sort Works

1. **Compare adjacent elements** from left to right
2. **Swap them** if they are in the wrong order (left > right for ascending)
3. **Continue** through the entire array
4. **Repeat** the process until no swaps are needed
5. **Optimization**: After each pass, the largest element is in its correct position

## 🛠️ Corrected Solution

*Note: Your original code had a few typos that I've fixed below:*

```js
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {  // Fixed: 'o' to 'i'
        let isSwapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {  // Fixed: j+2 to j+1
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;  // Fixed spacing

                isSwapped = true;
            }
        }

        // Optimization: if no swapping occurred, array is sorted
        if (!isSwapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", array);
let sorted = bubbleSort([...array]); // Using spread to avoid mutating original
console.log("Sorted:", sorted);
```


## 🔍 Dry Run of Bubble Sort

Let's trace through `bubbleSort()` step by step:

**Initial Array**: ``

### **Pass 1 (i = 0)**

| Step | j | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | `64 > 34` | Swap | `` |
| 2 | 1 | `64 > 25` | Swap | `` |
| 3 | 2 | `64 > 12` | Swap | `` |
| 4 | 3 | `64 > 22` | Swap | `` |
| 5 | 4 | `64 > 11` | Swap | `` |
| 6 | 5 | `64 < 90` | No Swap | `` |

**After Pass 1**: `` ✅ **90 is in correct position**

### **Pass 2 (i = 1)**

| Step | j | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | `34 > 25` | Swap | `` |
| 2 | 1 | `34 > 12` | Swap | `` |
| 3 | 2 | `34 > 22` | Swap | `` |
| 4 | 3 | `34 > 11` | Swap | `` |
| 5 | 4 | `34 < 64` | No Swap | `` |

**After Pass 2**: `` ✅ **64 is in correct position**

### **Pass 3 (i = 2)**

| Step | j | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | `25 > 12` | Swap | `` |
| 2 | 1 | `25 > 22` | Swap | `` |
| 3 | 2 | `25 > 11` | Swap | `` |
| 4 | 3 | `25 < 34` | No Swap | `` |

**After Pass 3**: `` ✅ **34 is in correct position**

### **Pass 4 (i = 3)**

| Step | j | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | `12 < 22` | No Swap | `` |
| 2 | 1 | `22 > 11` | Swap | `` |
| 3 | 2 | `22 < 25` | No Swap | `` |

**After Pass 4**: `` ✅ **25 is in correct position**

### **Pass 5 (i = 4)**

| Step | j | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | `12 > 11` | Swap | `` |
| 2 | 1 | `12 < 22` | No Swap | `` |

**After Pass 5**: `` ✅ **22 is in correct position**

### **Pass 6 (i = 5)**

| Step | j | Compare | Action | Array State |
| :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | `11 < 12` | No Swap | `` |

**Final Result**: `` ✅ **Completely Sorted!**

Since no swaps occurred in the last pass, `isSwapped` remains `false` and the algorithm can terminate early.

## 🧠 Key Observations

1. **After each pass**, the largest unsorted element moves to its correct position
2. **Inner loop range decreases** by 1 each time (`n - 1 - i`) because the last `i` elements are already sorted
3. **Early termination**: If no swaps occur in a pass, the array is already sorted
4. **Total passes needed**: At most `n-1` passes for an array of size `n`

## 📊 Complexity Analysis

- **Time Complexity**:
    - **Worst Case**: O(n²) - when array is reverse sorted
    - **Average Case**: O(n²)
    - **Best Case**: O(n) - when array is already sorted (with optimization)
- **Space Complexity**: O(1) - only uses constant extra space
- **Stability**: Yes - equal elements maintain their relative order


## 📝 Notes

- Simple to understand and implement
- **Not efficient** for large datasets due to O(n²) complexity[^1][^2][^5]
- **Good for small arrays** or **educational purposes**
- **In-place sorting** - doesn't require extra space
- **Stable sorting** - maintains relative order of equal elements

<div style="text-align: center">⁂</div>
