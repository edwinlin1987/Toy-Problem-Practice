/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    var cache = [1,2];
    
    var climb = function() {
        cache.push(cache[cache.length-1] + cache[cache.length-2]);
    }
    while (cache.length < n) {
        climb();
    }
    return cache[n-1];
};
