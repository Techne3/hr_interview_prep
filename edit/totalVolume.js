//https://edabit.com/challenge/Dq8kbbsLYyG9are5Z

function totalVolume(...boxes) {
  let result = [];
  for (let i = 0; i < boxes.length; i++) {
    result.push(boxes[i][0] * boxes[i][1] * boxes[i][2]);
  }
  return result.reduce((a, b) => a + b);
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
//////////////

function progressDays(runs) {
  let count = 0;
  for (let i = 0; i < runs.length; i++) {
    if (runs[i] < runs[i + 1]) {
      count++;
    }
  }
  return count;
}

console.log(progressDays([3, 4, 1, 2]));
