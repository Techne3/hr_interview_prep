const isThree = (n) => {
  return calD(n).size == 3;
};

const calD = (n) => {
  // all divisors
  let res = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (n / i == i) {
        res.add(i);
      } else {
        res.add(i);
        res.add(n / i);
      }
    }
  }
  return res;
};
