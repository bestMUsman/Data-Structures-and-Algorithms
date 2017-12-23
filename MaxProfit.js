// Best Time to Buy and Sell Stock (leetcode)
const maxProfit = function(prices) {
  let maxValue = 0;
  let minValue = Math.max(...prices);

  for (let i = 0; i < prices.length; i++) {
    minValue = Math.min(minValue, prices[i]);
    maxValue = Math.max(maxValue, prices[i] - minValue);
  }
  return maxValue;
};

maxProfit([7, 1, 5, 3, 6, 4]);