function firstDuplicate(a) {
  let map = {};
  for (let i = 0; i < a.length; i++) {
    if (map[a[i]] !== undefined) {
      return a[i];
    } else {
      map[a[i]] = i;
    }
  }
  return -1;
}

console.log(firstDuplicate("abcdab"));

const FD = (b) => {
  let r = new Set();
  for (letter of b) {
    if (r.has(letter)) {
      return letter;
    } else {
      r.add(letter);
    }
  }
  return -1;
};

console.log(FD("cbcba"));
////////////

function trace(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}

console.log(
  trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
