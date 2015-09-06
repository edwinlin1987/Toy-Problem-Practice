/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var greatest = nums[0];
  var current = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (current < 0) current = nums[i];
    else current += nums[i];
    greatest = greatest > current ? greatest : current;
  }  
  return greatest;
};

