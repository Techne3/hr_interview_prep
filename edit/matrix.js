function matrix(x, y, z) {
  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(new Array(y).fill(z));
  }
  return result;
}
console.log(matrix(3, 2, 3));
/////////

function powerOfTwo(num) {
  return num && (num & (num - 1)) === 0;
}
console.log(powerOfTwo(32));
console.log(powerOfTwo(18));
//////////

function subset(arr1, arr2) {
  return arr1.every((x) => arr2.includes(x));
}
console.log(subset([1, 3], [1, 3, 3, 5]));
///////////

function parityAnalysis(num) {
  let numArr = Array.from(String(num), Number);
  let total = numArr.reduce((a, c) => a + c);

  return (num % 2 == 0 && total % 2 == 0) || (num % 2 !== 0 && total % 2 !== 0);
}
console.log(parityAnalysis(243));
console.log(parityAnalysis(12));
console.log(parityAnalysis(4));
////////////

function adds(n) {
  return function (x) {
    return x + n;
  };
}
console.log(adds(10)(20));
//////////////

function hasHiddenFee(prices, t) {
  //   let splitArr = prices.toString().split("$");
  //   let filtered = splitArr.filter((x) => x !== "");
  //   let num = filtered.map((x) => parseFloat(x));
  //   let total = num.reduce((a, c) => a + c);
  //   let tNum = t.toString().split("$");
  //   return tNum[1] > total;

  let priceNum = prices.map((x) => +x.slice(1));
  console.log(priceNum);
}

console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"));
