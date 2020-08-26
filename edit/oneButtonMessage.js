function howManyTimes(msg) {
  //   let result = [];
  //   for (let i = 0; i < msg.length; i++) {
  //     let times = msg.charCodeAt(i) - 96;
  //     result.push(times);
  //   }
  //   return result.reduce((a, c) => a + c);

  return [...msg].map((x) => x.charCodeAt() - 96).reduce((a, b) => a + b);
}
console.log(howManyTimes("abde"));
/////////////////

function doubledPay(n) {
  let m = 1;
  for (let i = 0; i < n; i++) {
    m *= 2;
  }
  return m - 1;
}
console.log(doubledPay(3));
/////////////

function isApocalyptic(num) {
  let res = String(BigInt(2 ** num)).match(/(666)/g);
  if (res == null) return "Safe";
  if (res.length == 1) return "Single";
  if (res.length == 2) return "Double";
  if (res.length == 3) return "Triple";
}

console.log(isApocalyptic(157));
