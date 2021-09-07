const memo = { 0: false, 1: true, 2: true, 3: true, 4: false };

var canWinNim = function (n) {
  if (memo[n] === undefined) {
    memo[n] = !canWinNim(n - 3) || !canWinNim(n - 2) || !canWinNim(n - 1);
  }
  return memo[n];
};
