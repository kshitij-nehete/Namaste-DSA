# 📈 Best Time to Buy and Sell Stock

Maximizing your stock profit by choosing the best days to buy and sell — a classic algorithmic challenge! Let’s break it down and solve it efficiently in JavaScript. 🚀

---

## 📝 Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day.

You want to **maximize your profit** by choosing a **single day to buy one stock** and choosing a **different day in the future to sell** that stock.

Return _the maximum profit_ you can achieve from this transaction.

If you cannot achieve any profit, return `0`.

🔗 [LeetCode Problem Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

---

## 💡 Approach

- Use a **single pass** through the array.

- Keep track of:

- The **minimum price** encountered so far (`min`).

- The **maximum profit** seen so far (`maxProfit`).

- At each step:

- Update the minimum price if the current price is lower.

- Calculate the potential profit if we sell on the current day.

- Update `maxProfit` if this potential profit is higher than the previous one.

✅ This approach runs in **O(n)** time and uses **O(1)** space.

---

## 🛠️ Solution

```js
/**

 * @param {number[]} prices

 * @return {number}

 */

var maxProfit = function (prices) {
  let min = prices[0];

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }

  return maxProfit;
};
```
