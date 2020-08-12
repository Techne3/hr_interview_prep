// https://edabit.com/challenge/f3Lc7Z5dK3p8dahoz
function canConcatenate(arr, target) {
  let flatten = arr.flat(Infinity).sort();
  let sorted = target.sort();
  return JSON.stringify(flatten) === JSON.stringify(sorted) ? true : false;
}
console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
//////////

function convert(deg) {
  let res = "Error";
  if (deg.indexOf("F") > 0) {
    res = Math.round((parseFloat(deg) - 32) / 1.8) + "°C";
  } else if (deg.indexOf("C") > 0) {
    res = Math.round(parseFloat(deg) * 1.8 + 32) + "°F";
  }
  return res;
}
console.log(convert("35°C"));
