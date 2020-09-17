function flattenCurve(arr) {
  if (!arr.length) {
    return [];
  }
  const mean = (arr.reduce((a, b) => a + b) / arr.length).toFixed(1);
  return arr.map((i) => +mean);
}
console.log(flattenCurve([1, 2, 3, 4, 5]));
