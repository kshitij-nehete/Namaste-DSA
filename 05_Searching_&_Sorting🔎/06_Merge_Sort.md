
# 🔀 Merge Sort (Divide and Conquer Algorithm)

Merge Sort is a **divide-and-conquer** algorithm that divides the array into smaller subarrays, sorts them, and then merges them back together in sorted order.

Here we have 2 phases:

1. **Divide Phase** - Recursively divide the array into smaller parts until each subarray has only 1 element
2. **Merge Phase** - Merge the sorted subarrays back together in sorted order

**LeetCode Problem Link**: [Sort an Array](https://leetcode.com/problems/sort-an-array/description/)

***

## 🛠️ Solution

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let mid = Math.floor(nums.length / 2);
    if (nums.length <= 1) return nums;  // Base case
    
    let left = sortArray(nums.slice(0, mid));    // Divide left half
    let right = sortArray(nums.slice(mid));      // Divide right half
    
    return merge(left, right);  // Merge sorted halves
};

function merge(left, right) {
    let i = 0, j = 0;
    let res = [];
    
    // Compare and merge elements from both arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    
    // Add remaining elements from both arrays
    return [...res, ...left.slice(i), ...right.slice(j)];
}

// Example usage:
console.log(sortArray([5, 2, 3, 1])); // Output: [1, 2, 3, 5]
```


***

## 🔍 Dry Run of Merge Sort

Let's trace through `sortArray()` step by step:[^3]

### **Phase 1: Divide Phase** 🔧

```
Initial Array: [38, 27, 43, 3, 9, 82, 10]
                        |
                   Divide at mid
                        ↓
            [38, 27, 43, 3]        [9, 82, 10]
                 |                      |
            Divide further         Divide further
                 ↓                      ↓
         [38, 27]    [43, 3]      [9, 82]    [^10]
            |          |             |         |
       Divide more  Divide more  Divide more  Base case
            ↓          ↓             ↓         ↓
             [^1]    [^2]      [^3]
     Base  Base   Base  Base   Base  Base    Base
```


### **Phase 2: Merge Phase** 🔧

Now we merge back up, combining sorted subarrays:

#### **Level 1 Merges:**

- `merge(, )` → ``
- `merge(, )` → ``[^1][^3]
- `merge(, )` → ``[^2]
- ``remains``[^3]


#### **Level 2 Merges:**

- `merge(, )` → ``[^3]
- `merge(, )` → ``[^3]


#### **Final Merge:**

- `merge(, )` → ``[^3]

***

## 🔍 Detailed Merge Process

Let's see how `merge(, )` works:[^3]


| Step | i | j | left[i] | right[j] | Compare | Action | Result Array |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | 0 | 0 | 3 | 9 | `3 < 9` | Add 3 | `[^1]` |
| 2 | 1 | 0 | 27 | 9 | `27 > 9` | Add 9 | `[^3]` |
| 3 | 1 | 1 | 27 | 10 | `27 > 10` | Add 10 | `[^3]` |
| 4 | 1 | 2 | 27 | 82 | `27 < 82` | Add 27 | `[^3]` |
| 5 | 2 | 2 | 38 | 82 | `38 < 82` | Add 38 | `[^3]` |
| 6 | 3 | 2 | 43 | 82 | `43 < 82` | Add 43 | `[^3]` |
| 7 | 4 | 2 | - | 82 | End left | Add remaining right | `[^3]` |

**Final Sorted Array**: `` ✅[^3]

***

## 🧠 Visual Tree Representation

```
                    [38,27,43,3,9,82,10]
                           |
                    ┌──────┴──────┐
                    |             |
            [38,27,43,3]      [9,82,10]
                |                 |
         ┌──────┴──────┐    ┌─────┴─────┐
         |             |    |           |
    [38,27]        [43,3]  [9,82]     [^10]
        |             |      |          |
    ┌───┴───┐     ┌───┴───┐ ┌─┴──┐      |
    |       |     |       | |    |      |
            [^1] [^2]    [^3]
    
    ↓ MERGE BACK UP ↓
    
   [27,38] [3,43]  [9,82]   [^3]
        |     |       |       |
    ┌───┴─────┘   ┌───┴───────┘
    |             |
 [3,27,38,43]  [9,10,82]
        |           |
        └─────┬─────┘
              |
    [3,9,10,27,38,43,82]
```


***

## 🧠 Key Concepts

### **Divide Phase**:

- **Recursive Division**: Keep splitting array in half until base case
- **Base Case**: Array with 1 or 0 elements (already "sorted")
- **Time**: O(log n) levels of recursion


### **Merge Phase**:

- **Two-Pointer Technique**: Compare elements from both sorted arrays
- **Merge Logic**: Always pick the smaller element first
- **Remaining Elements**: Add leftover elements from either array
- **Time**: O(n) for each merge operation

***

## 📊 Complexity Analysis

- **Time Complexity**:
    - **All Cases**: O(n log n) - consistent performance
    - **Divide**: O(log n) levels
    - **Merge**: O(n) work per level
- **Space Complexity**: O(n) - requires additional space for temporary arrays
- **Stability**: Yes - equal elements maintain relative order
- **Adaptive**: No - always performs same number of operations

***

## 🖨️ Output

```
Input:  [38, 27, 43, 3, 9, 82, 10]
Output: [3, 9, 10, 27, 38, 43, 82]
```


***

## 📝 Notes

- **Guaranteed O(n log n)** - unlike quicksort, performance is predictable
- **Stable sorting** - maintains order of equal elements
- **Divide and Conquer** - classic example of this algorithmic paradigm
- **Not in-place** - requires additional memory (unlike heapsort)
- **Parallelizable** - divide phase can be done in parallel
- **Preferred for large datasets** - consistent performance
- **Used in practice** - forms basis of Timsort (Python's built-in sort)


## 🔄 Memory Optimization

```js
// In-place merge sort (more complex but saves space)
function mergeSortInPlace(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;
    
    let mid = Math.floor((start + end) / 2);
    mergeSortInPlace(arr, start, mid);
    mergeSortInPlace(arr, mid + 1, end);
    mergeInPlace(arr, start, mid, end);
}
```

Merge Sort is the **gold standard** for stable, predictable sorting - it's like organizing a deck of cards by repeatedly splitting the deck and then carefully merging the piles back together! 🃏✨

<div style="text-align: center">⁂</div>



