// https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

function lateRide(n) {
  let hours = Math.floor(n / 60);
  let mins = n - hours * 60;
  let arr = (hours + "" + mins).split("");
  return arr.reduce((a, b) => parseInt(a) + parseInt(b));
}
console.log(lateRide(1439));

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
  console.log(d);
  console.log(c);

  d = d.reverse();

  if (c.length === 2 && c.toString() === d.toString()) {
    return true;
  }
  return false;
}

console.log(areSimilar([1, 2, 3], [2, 1, 3]));
