function reverseOdd(str) {
  //   let sArr = str.split(" ");
  //   let reversedStr = (str) => str.split("").reverse().join("");
  //   let result = '';

  //   for (let i = 0; i < sArr.length; i++) {
  //     if (sArr[i].length % 2 !== 0) {
  //         sArr[i] = reversedStr(sArr[i])
  //     }
  //   }
  //   return sArr.join(' ')

  let reversedStr = (str) => str.split("").reverse().join("");
  return str
    .split(" ")
    .map((ele) => (ele.length % 2 !== 0 ? reversedStr(ele) : ele))
    .join(" ");
}

console.log(reverseOdd("One two three four"));

//////

function primeFactorize(num) {
  let list = [];
  for (i = 2; num > 1; i++)
    if (num % i == 0) {
      list.push(i);
      num /= i;
    }
  return list;
}
console.log(primeFactorize(77));
