// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function matrixElementsSum(matrix) {
  let total = 0;

  // Navigate each column of rooms
  // i = current column, j = current floor in column
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        // This room is haunted, so we don't care about the rooms below it.
        // Continue to the next column of rooms
        break;
      }
      total += matrix[j][i];
    }
  }

  return total;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
