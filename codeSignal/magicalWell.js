function magicalWell(a, b, n) {
  let count = 0;
  let total = 0;

  while (count < n) {
    total += a * b;
    count++;
    a++;
    b++;
  }
  return total;
}

console.log(magicalWell(1, 2, 2));
