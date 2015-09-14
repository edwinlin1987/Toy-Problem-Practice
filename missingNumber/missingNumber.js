/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var sum = 0;
  var total = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i;
  }
  total += nums.length;  
  return total-sum
};
