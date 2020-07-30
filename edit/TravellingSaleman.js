// https://edabit.com/challenge/r453y7c3vBQz4Rrbn

function paths(n) {
  //   if (n < 0) {
  //     return -1;
  //   } else if (n == 0) {
  //     return 1;
  //   } else {
  //     return n * paths(n - 1);
  //   }

  return n === 0 ? 1 : n * paths(n - 1);
}

console.log(paths(9));
console.log(paths(0));
