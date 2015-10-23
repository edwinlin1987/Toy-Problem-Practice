/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var i,
      len = nums.length,
      index = 0;
  for (i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (i = index; i < len; i++) {
    nums[i] = 0; 
  }
};
