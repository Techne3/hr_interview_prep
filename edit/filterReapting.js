// https://edabit.com/challenge/fxvceQdv7RHQzrx2J

function identicalFilter(arr) {
  return arr.filter((x) => new Set(x).size === 1);
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));

function operators(sa) {
  let total = 0;
  let s = sa.match(/[+\-\*]?[0-9\.]+/g);

  while (s.length) {
    total += parseFloat(s.pop());
  }
  return total;
}

console.log(operators("-12+32-89+33"));
///////

function boxSeq(step) {
  let count = 0;
  for (let i = 1; i <= step; i++) {
    if (i % 2 !== 0) {
      count += 3;
    } else {
      count -= 1;
    }
  }
  return count;
}

console.log(boxSeq(5));
