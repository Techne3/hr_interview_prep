// https://edabit.com/challenge/qYAhaD8fTbHWNe9oT

function convertCartesian(x, y) {
  var cords = [];
  for (var i = 0; i < x.length; i++) {
    cords.push([x[i], y[i]]);
  }
  return cords;
}

console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
