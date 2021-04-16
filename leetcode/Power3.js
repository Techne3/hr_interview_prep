function Power3(n) {
  if (n == 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

console.log(Power3(27));
console.log(Power3(45));
console.log(Power3(0));
