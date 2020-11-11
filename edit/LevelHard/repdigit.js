function isRepdigit(num) {
  //   let splitNum = num.toString().split("");

  //   return num < 0 ? false : num === 0 ? true : new Set(splitNum).size === 1;

  let splitNum = num.toString().split("");
  return splitNum.every((x, i, arr) => x === arr[0]);
}
console.log(isRepdigit(6666));
console.log(isRepdigit(-66));
console.log(isRepdigit(0));

function dis(price, discount) {
  let discounted = ((discount * price) / 100).toFixed(2);
  return price - discounted;
}

console.log(dis(1500, 50));
