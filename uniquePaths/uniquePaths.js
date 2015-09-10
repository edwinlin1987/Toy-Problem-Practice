/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var matrix = [];
  var firstRow = [];
  matrix.push(firstRow); 
  for (var i = 0; i < n; i++) {
    firstRow.push(1);
  }
  for (i = 1; i < m; i++) {
    matrix.push([1]);
    for (var j = 1; j < n; j++ ) {
      matrix[i].push(matrix[i-1][j] + matrix[i][j-1]); 
    }  
  }
  return matrix[m-1][n-1];
};

