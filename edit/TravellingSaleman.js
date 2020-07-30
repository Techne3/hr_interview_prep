// https://edabit.com/challenge/r453y7c3vBQz4Rrbn

function paths(n) {
  //   if (n < 0) {
  //     return -1;
  //   } else if (n == 0) {
  //     return 1;
  //   } else {
  //     return n * paths(n - 1);
  //   }

  return n === 0 ? 1 : n * paths(n - 1);
}

console.log(paths(9));
console.log(paths(0));

//////////

function longestTime(h, m, s) {
  const secondsInHours = s / 3600;
  const minuteInHours = m / 60;

  if (secondsInHours > minuteInHours && secondsInHours > h) {
    return s;
  } else if (minuteInHours > h) {
    return m;
  } else return h;
}

console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
////////////////

function isSpecialArray(arr) {
  return arr.every((x, i) => x % 2 === i % 2);
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));

// ////////////

function rev(n) {
  let strN = Math.abs(n).toString().split("").reverse().join("");
  //   if (strN.endsWith("-")) {
  //     return strN.replace("-", "");
  //   }
  return strN;
}

console.log(rev(123));
console.log(rev(-123));

///////////

function indexMultiplier(arr) {
  return arr.map((el, index) => el * index).reduce((a, b) => a + b, 0);
}

console.log(indexMultiplier([1, 2, 3, 4, 5]));
