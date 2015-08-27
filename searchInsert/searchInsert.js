/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var index = 0;
  for (var i = 0; i < nums.length; i++){
    if (target === nums[i]){
      index = i;
    } else if (target > nums[i]) {
      index = i+1;	    
    }
  }
  return index;  
};
