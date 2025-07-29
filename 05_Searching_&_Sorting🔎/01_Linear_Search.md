# 🔍 Linear Search

Linear search is the **simplest searching algorithm** that finds an element in a collection by examining each item sequentially from start to end. It's also known as **sequential search** because it searches elements one by one.

## 📝 What is Linear Search?

Linear search is a method for finding an element within a list by sequentially checking each element until a match is found or the entire list has been searched. The algorithm examines each element until it finds a match, starting from the first element and moving through the array in order.

## 💡 How Linear Search Works

The algorithm follows these simple steps:

1. **Start** from the first element (index 0) of the array
2. **Compare** the current element with the target value
3. **If match found**: Return the current index
4. **If no match**: Move to the next element
5. **Repeat** until element is found or end of array is reached
6. **Return -1** if element is not found

## 🛠️ Linear Search Implementation

Here's a JavaScript implementation of linear search:

```js
/**
 * Linear Search Algorithm
 * @param {number[]} arr - Array to search in
 * @param {number} target - Element to find
 * @return {number} - Index of element if found, -1 otherwise
 */
function linearSearch(arr, target) {
    // Iterate through each element in the array
    for (let i = 0; i  target) {
            break;
        }
    }
    return -1;
}
```

### Find All Occurrences

```js
function findAllOccurrences(arr, target) {
    let indices = [];
    for (let i = 0; i  0 ? indices : -1;
}
```

## 📝 Notes

- Linear search is the foundation for understanding more complex search algorithms
- Despite its simplicity, it's still used in many practical applications
- **Time complexity grows linearly** with input size, making it impractical for very large datasets
- The algorithm **doesn't require sorted data**, making it versatile for various scenarios
- Modern programming languages often use optimized versions of linear search in their built-in search functions

Linear search may not be the fastest, but its simplicity and versatility make it an essential algorithm to understand! 🚀
