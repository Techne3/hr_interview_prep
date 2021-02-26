function numberOfIslands(grid) {
  let countIslands = 0;

  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "1") {
        countIslands++;
        teraform(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }
  return countIslands;
}

const teraform = (rowIn, colIn, grid) => {
  if (
    grid[rowIn] === undefined ||
    grid[rowIn][colIn] === undefined ||
    grid[rowIn][colIn] === "0"
  )
    return;
  grid[rowIn][colIn] = "0";
  //bottom
  teraform(rowIn + 1, colIn, grid);
  //top
  teraform(rowIn - 1, colIn, grid);
  //left
  teraform(rowIn, colIn + 1, grid);
  //top
  teraform(rowIn, colIn - 1, grid);
};

console.log(
  numberOfIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
