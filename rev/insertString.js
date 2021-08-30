function insertString(r, s, n) {
  return r.substring(0, n) + s + r.substring(n + 1, r.length);
}

console.log(insertString("Hello World", "lo W", 4));

/////

function insertS(r, s, n) {
  for (let i = 0; i < r.length; i++) {
    if (i == n) {
      r = r.substring(0, i) + s + r.substring(i + 1, r.length);
    }
  }
  return r;
}
console.log(insertS("Hello World", "lo W", 4));

function getFactors(n) {
  factors = [];
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}
