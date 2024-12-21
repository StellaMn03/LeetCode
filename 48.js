var rotate = function (matrix) {
  for (let i = 0; i < Math.floor(matrix.length / 2); ++i) {
    [matrix[i], matrix[matrix.length - 1 - i]] = [
      matrix[matrix.length - 1 - i],
      matrix[i],
    ];
  }
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = i + 1; j < matrix.length; ++j) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.log(matrix);
  return matrix;
};
