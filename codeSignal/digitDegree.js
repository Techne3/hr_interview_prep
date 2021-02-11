function digitDegree(n) {
  let count = 0;

  if (n <= 9) return 0;

  while (n > 9) {
    count++;
    n = n
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b));
  }

  return count;
}

console.log(digitDegree(159));
