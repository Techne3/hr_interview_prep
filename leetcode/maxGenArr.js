function maxGenArr(n) {
  if (n < 2) return n;

  let a = new Array(n + 1).fill(0);
  console.log(a);

  let max = 0;
  a[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      a[i] = a[Math.floor(i / 2)];
      max = a[i] > max ? a[i] : max;
    } else {
      a[i] = a[Math.floor(i / 2)] + a[Math.floor(i / 2) + 1];
      max = a[i] > max ? a[i] : max;
    }
  }
  return max;
}

console.log(maxGenArr(7));
