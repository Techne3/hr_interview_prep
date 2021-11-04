var combinationSum3 = function (k, n) {
  const combs = [];
  getCombs(0, [], k, n, combs);
  return combs;
};

const getCombs = (currentNum, comb, k, n, combs) => {
  if (n < 0) return;
  if (k === 0 && n === 0) return combs.push([...comb]);
  for (let num = currentNum + 1; num <= 9; num++) {
    comb.push(num);
    getCombs(num, comb, k - 1, n - num, combs);
    comb.pop();
  }
  return;
};
