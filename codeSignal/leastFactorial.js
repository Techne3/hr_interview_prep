// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy

function leastFactorial(n) {
  let m = 1;
  let k = 1;
  while (k < n) {
    k *= m++;
  }
  return k;
}

console.log(leastFactorial(17));

function countSumOfTwoRepresentations2(n, l, r) {
  let t = 0;
  for (let i = l; i <= r; i++) {
      console.log(i)
      console.log(n -i)

    // if (n - i >= i && n - i <= r) {
    //   t++;
    // }
  }
  return t;
}
console.log(countSumOfTwoRepresentations2(6, 2, 4));
