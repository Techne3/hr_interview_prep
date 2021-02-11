function absoluteValueMinSum(a) {
  return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValueMinSum([2, 4, 7, 6, 3]));

function depositProfit(deposit, rate, threshold) {
  let year = 0;

  while (threshold > deposit) {
    year++;
    deposit += (deposit * rate) / 100;
  }
  return year;
}

console.log(depositProfit(100, 20, 170));
/////////////////

function circleOfNum(n, firstNumber) {
  let halfWay = n / 2;

  //   for (let i = 0; i < n; i++) {
  //     numArr.push(i);
  //   }
  if (firstNumber < halfWay) {
    return firstNumber + halfWay;
  }
  return firstNumber - halfWay;
}

console.log(circleOfNum(12, 2));
