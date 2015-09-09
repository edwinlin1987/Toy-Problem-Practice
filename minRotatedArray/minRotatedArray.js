/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var lower = 0;
  var upper = nums.length - 1;
  var current = Math.floor((lower+upper)/2);
  while (nums[lower] !== nums[current]) {
    if (nums[lower] < nums[current] && nums[lower] < nums[upper]) {
        return nums[lower];
    } else if (nums[lower] < nums[current]) {
      lower = current;
    } else {
      upper = current;
    } 
    current = Math.floor((lower+upper)/2);      
  }  
  return nums[lower] > nums[upper] ? nums[upper] : nums[lower];
};


