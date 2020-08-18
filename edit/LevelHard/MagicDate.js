function Magic(str) {
  let strArr = str.split(" ");
  let mult = strArr[0] * strArr[1];

  return mult <= 9 && strArr[2].endsWith(mult)
    ? true
    : mult >= 10 && Number(strArr[2].slice(-2)) === mult
    ? true
    : mult >= 100 && Number(strArr[2].slice(-3)) === mult
    ? true
    : false;
}

console.log(Magic("1 1 2011"));
console.log(Magic("70 4 2180"));
//////////////

function incrementToTop(arr) {
  let diff = 0;
  let max = Math.max(...arr);

  arr.map((x) => (diff += max - x));
  return diff;
}

console.log(incrementToTop([3, 10, 3]));
