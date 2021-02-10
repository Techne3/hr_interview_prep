function extractEachKth(inputArray, k) {
  return inputArray.filter((x, i) => {
    return (i + 1) % k !== 0;
  });
}
console.log(extractEachKth([1, 2, 3, 4], 3));
