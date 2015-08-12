/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        num += (s.charCodeAt(i)-64) * Math.pow(26,s.length-i-1);
    }
    return num;
};