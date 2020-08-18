// https://edabit.com/challenge/uScx6aGXmNu27NYWz

function getFrequencies(arr) {
  let map = {};
  let splitArr = arr.toString().split("");
  for (letter of splitArr) {
    if (map[letter]) {
      map[letter]++;
    } else {
      map[letter] = 1;
    }
  }
  return map;
}

console.log(getFrequencies(["AAABAC"]));

///

var replaceElements = function (arr) {
  if (arr.length === 1) return [-1];

  let currentMax = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentValue = arr[i];
    arr[i] = currentMax;
    currentMax = Math.max(currentMax, currentValue);
  }

  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
/////////////

function returnEndOfNumber(num) {
  if ([11, 12, 13].includes(num)) return `${num}-TH`;
  if (String(num).endsWith("1")) return `${num}-ST`;
  if (String(num).endsWith("2")) return `${num}-ND`;
  if (String(num).endsWith("3")) return `${num}-RD`;
  return `${num}-TH`;
}

// console.log(returnEndOfNumber(3));
console.log(returnEndOfNumber(511));
console.log(returnEndOfNumber(12));
console.log(returnEndOfNumber(1));
