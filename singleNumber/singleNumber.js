/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var len = nums.length
  for (var i = 1; i < len; i++) {
    nums[0] = nums[0] ^ nums[i];
  } 
  return nums[0];
};
