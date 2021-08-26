function insertString(r, s, n) {
  return r.substring(0, n) + s + r.substring(n + 1, r.length);
}

console.log(insertString("Hello World", "lo W", 4));

/////

function getFactors(n) {
  factors = [];
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}
