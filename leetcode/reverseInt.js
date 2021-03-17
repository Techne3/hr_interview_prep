var reverse = function (x) {
  let sign = Math.sign(x);
  x = Math.abs(x);
  let reversed = 0;
  while (x > 0) {
    let lsb = x % 10;
    reversed = reversed * 10 + lsb;
    x = Math.floor(x / 10);
  }
  if (reversed > 2 ** 31 - 1) return 0;
  reversed = sign * reversed;
  return reversed;
};

console.log(reverse(-123));
// console.log(reverseInt(120))
