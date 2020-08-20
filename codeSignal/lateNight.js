// https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

function lateRide(n) {
  let hours = Math.floor(n / 60);
  let mins = n - hours * 60;
  let arr = (hours + "" + mins).split("");
  return arr.reduce((a, b) => parseInt(a) + parseInt(b));
}
console.log(lateRide(1439));
