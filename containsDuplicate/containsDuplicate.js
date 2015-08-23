/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var dup = {};
  for (var i = 0; i < nums.length ;i++) {
    if (dup[nums[i]] !== undefined) return true;
    else dup[nums[i]] = nums[i];   
  }
  return false; 
};
