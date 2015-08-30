/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var result = [];
  result[nums.length-1] = 1;
  
  for (var i = nums.length-2; i >= 0; i--) {
    result[i] = result[i+1] * nums[i+1];
  }
  
  var current = 1;
  for (i = 0; i < nums.length; i++) {
    result[i] *= current;
    current *= nums[i];
  }

  return result;
};
