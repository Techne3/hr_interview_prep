function calculateArrowhead(arr) {
  let string = arr.join("");
  let leftFilter = [...string].filter((x) => x === "<").length;
  let rightFilter = [...string].filter((x) => x === ">").length;

  if (leftFilter === rightFilter) {
    return "";
  }
  return leftFilter > rightFilter
    ? ">".repeat(leftFilter - rightFilter)
    : "<".repeat(rightFilter - leftFilter);
}

console.log(calculateArrowhead([">>>>", "<", "<", "<"]));
///////////////////

function digitalClock(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds / 60) % 60;
  let secondsLeft = seconds % 60;
  let hourString = hours.toString().length === 1 ? `0${hours}` : `${hours}`;
  let minString =
    minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`;
  let secondsString =
    secondsLeft.toString().length === 1 ? `0${secondsLeft}` : `${secondsLeft}`;

  return hours === 24
    ? `00:${minString}:${secondsString}`
    : hours > 24
    ? `01:${minString}:${secondsString}`
    : `${hourString}:${minString}:${secondsString}`;
}
console.log(digitalClock(178056));
////////////

function product(arr) {
  let sorted = arr.sort((a, b) => b - a);
  let unique = [...new Set(sorted)];
  let firstLarge = unique[0];
  let secondLarge = unique[1];

  return unique.length === 1
    ? firstLarge * firstLarge
    : firstLarge * secondLarge;
}
console.log(product([2, 3, 1, -1, 2]));
////////////
function isScalable(arr) {
  for (let i = 1; i < arr.length; i++)
    if (arr[i] - arr[i - 1] > 5) return false;
  return true;
}
console.log(isScalable([1, 2, 4, 6, 7, 8]));
console.log(isScalable([40, 45, 50, 48, 47, 52]));
console.log(isScalable([2, 9, 11, 10, 18, 21]));
////////////

function joinDigits(n) {
  let digits = "";
  for (let i = 1; i <= n; i++) {
    digits += i;
  }
  return digits.split("").join("-");
}
console.log(joinDigits(11));
//////////

function allTruthy(...args) {
  let argsArr = [...args];
  let filtered = argsArr.filter((x) => !x);
  return filtered.length >= 1 ? false : true;
}
console.log(allTruthy(5, 4, 3, 2, 1, 0));
