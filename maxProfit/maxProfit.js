/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 1) return 0;	
  var lowest = prices[0];
  var profit = prices[1] - prices[0]; 
  for (var i = 0; i < prices.length; i++) {
    lowest = prices[i] > lowest ? lowest : prices[i];
    profit = profit > (prices[i] - lowest) ? profit : prices[i] - lowest;
  }  
  return profit;
};
