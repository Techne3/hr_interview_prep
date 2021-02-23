function numberOfStudents(startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      count++;
    }
  }
  return count;
}

console.log(numberOfStudents([1, 2, 3], [3, 2, 7], 4));
///////////////

function replaceElements(arr) {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    max = Math.max(temp, max);
  }
  return arr;
}
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
