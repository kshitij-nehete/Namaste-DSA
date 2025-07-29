# 🎯 Binary Search

Binary search is an efficient searching algorithm that finds an element in a **sorted array** by repeatedly dividing the search interval in half. It's much faster than linear search for large datasets! 🚀

## 📝 Prerequisites

**Note**: Binary Search can **only be applied to sorted arrays**. The array must be arranged in ascending or descending order for the algorithm to work correctly.

## 💡 How Binary Search Works

Whenever we do Binary Search, we try to find the **middle element**:

```
middle element = (left element + right element) / 2
```

Based on the comparison with the target:

```js
if (middle element == target) {
    return "mil gaya bhai" // Found the target!
} else if (middle element  < target) {
    return "bhai iska matlab target left side ko hai" // Target is on the left side
}
```

## 🔄 Search Logic

### When target is on the **right side**:

```
new middle element = (prev middle element + 1) + right element / 2
```

### When target is on the **left side**:

```
new middle element = left element + (prev middle element - 1) / 2
```

## 🛠️ Binary Search Implementation

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
```

## 📝 Notes

- **Divide and Conquer**: Binary search perfectly demonstrates this algorithmic paradigm
- **Sorted Prerequisite**: The array MUST be sorted for binary search to work correctly
- **Logarithmic Efficiency**: Each comparison eliminates half of the remaining possibilities
- **Foundation Algorithm**: Understanding binary search is crucial for more advanced algorithms
- **Real-world Applications**: Used in databases, search engines, and many system applications

Binary search transforms the searching problem from O(n) to O(log n), making it one of the most important algorithms in computer science! 🌟
