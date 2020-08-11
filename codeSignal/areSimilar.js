// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function areSimilar(a, b) {
  if (a.toString() === b.toString()) {
    return true;
  }

  let c = [];
  let d = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  d = d.reverse();
  if (c.length === 2 && c.toString() === d.toString()) {
    return true;
  }
  return false;
}

console.log(areSimilar([1, 2, 3], [1, 3, 4, 2]));
////////////////

function addTwoDigits(n) {
  let numArr = Array.from(String(n), Number);
  return numArr.reduce((a, b) => a + b);
}

console.log(addTwoDigits(29));
////////////

function largestNumber(n) {
  let largest = "9".repeat(n);
  return Number(largest);
}

console.log(largestNumber(3));

function candies(n, m) {
  let sub = m % n;
  return m - sub;
}

console.log(candies(10, 5));
