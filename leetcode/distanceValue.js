function distanceValue(arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let passes = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        passes = false;
      }
    }
    if (passes) {
      count++;
    }
  }
  return count;
}

console.log(distanceValue([4, 5, 8], [10, 9, 1, 8], 2));
