function insertString(r, s, n) {
  return r.substring(0, n) + s + r.substring(n + 1, r.length);
}

console.log(insertString('Hello World', 'lo W', 4));

// // Write a program that tells whether the given number N have any divisible!.
// // Input: N = 6, Ouput = 6 has divisible (2,3)

// // function substring()
function getFactors(n) {
  factors = [];
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(getFactors(6));


function 