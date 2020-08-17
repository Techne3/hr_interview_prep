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
  if (deg.indexOf("F") !== -1) {
    res = Math.round((parseFloat(deg) - 32) / 1.8) + "°C";
  } else {
    res = Math.round(parseFloat(deg) * 1.8 + 32) + "°F";
  }
  return res;
}
console.log(convert("35°C"));
console.log(convert("35°F"));
//////////

function missing(arr) {
  let difference = (arr[arr.length - 1] - arr[0]) / arr.length;

  for (let i = 0; i < arr.length; i++) {
    return arr[i] + difference;
  }
}
console.log(missing([1, 3, 4, 5]));
///////////

function oddishOrEvenish(num) {
  let splitNum = num
    .toString()
    .split("")
    .map((x) => +x);

  let added = splitNum.reduce((a, b) => a + b);

  return added % 2 == 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(4433));
console.log(oddishOrEvenish(43));
//////////

function combinations(items) {
  let itemArr = [...arguments];
  return itemArr.reduce((a, b) => a * b);
}
console.log(combinations(2, 3, 4, 5));
////////////

function balanced(arr) {
  let first = arr.slice(0, arr.length / 2);
  let last = arr.slice(arr.length / 2);

  let firstAdd = first.reduce((a, b) => a + b);
  let lastAdd = last.reduce((a, b) => a + b);

  return firstAdd === lastAdd
    ? arr
    : firstAdd > lastAdd
    ? [...first, ...first]
    : [...last, ...last];
}
console.log(balanced([1, 2, 4, 6, 3, 1]));
console.log(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]));
console.log(balanced([100, 55]));
