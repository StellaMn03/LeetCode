var transpose = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let transposed = new Array(n).fill().map(() => new Array(m));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  console.log(transposed);
  return transposed;
};
