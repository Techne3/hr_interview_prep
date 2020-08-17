// https://edabit.com/challenge/qfAvihoTKivTuzapt

function isTriplet(n1, n2, n3) {
  let maxNum = Math.max(...arguments);
  let minNum = [...arguments]
    .filter((x) => x !== maxNum)
    .sort((a, b) => a - b)
    .reduce((a, c) => a ** 2 + c ** 2);

  return maxNum ** 2 === minNum;
}

console.log(isTriplet(13, 5, 12));
///////////////

function lastDig(a, b, c) {
  return ((a % 10) * b) % 10 === c % 10;
}
console.log(lastDig(25, 21, 125));
///////////

function countPosSumNeg(arr) {
  if (!arr.length) {
    return [];
  } else {
    let neg = arr.filter((x) => x < 0).reduce((a, c) => a + c);
    let pos = arr.filter((x) => x > 0).length;
    return [pos, neg];
  }
}

console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]));
