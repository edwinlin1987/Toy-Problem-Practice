/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var array = [];
  
  var recurse = function (string, leftCount, rightCount) {
    if (rightCount > leftCount) return;
    if (string.length === 2*n && rightCount === leftCount) return array.push(string);
    if (string.length === 2*n) return;
    recurse(string+'(',leftCount+1,rightCount);
    recurse(string+')',leftCount, rightCount+1);
  }
  recurse("",0,0);

  return array;
    
};
