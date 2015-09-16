/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var hashTable = {};
  var string = n.toString();
  var value;
  while (hashTable[string] === undefined) {
    hashTable[string] = true;
    value = 0;
    for (i = 0; i < string.length; i++) {
      value += +string[i] * +string[i];
    }
    string = value.toString();
  } 
  return string === '1' ? true : false;
};
