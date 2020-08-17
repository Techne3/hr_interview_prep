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
