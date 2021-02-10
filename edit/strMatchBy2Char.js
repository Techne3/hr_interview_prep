function strMatchBy2char(a, b) {
  let aArray = [];
  let bArray = [];

  let minLength = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < minLength - 1; i++) {
    aArray.push(a[i] + a[i + 1]);
    bArray.push(b[i] + b[i + 1]);
  }

  return aArray.filter((ele, i) => ele === bArray[i]).length;
}
console.log(strMatchBy2char("yytaazz", "yyjaaz"));

function spinAround(r) {
  let leftAmount = 0;
  let rightAmount = 0;
  if (r.length <= 1) return 0;
  for (let i = 0; i < r.length; i++) {
    r[i] === "left" ? (leftAmount += 90) : (rightAmount += 90);
  }

  let total =
    leftAmount > rightAmount
      ? leftAmount - rightAmount
      : rightAmount - leftAmount;
  return Math.round(total / 360);
}

console.log(spinAround(["left"]));
console.log(
  spinAround([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
  ])
);

function removeSpecialCharacters(str) {
  //   let reg = /[^a-zA-Z0-9_-\s]/g;
  //   let found = str.match(reg);

  let special = ["!"];
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(special)) {
      str = str.replace(str[i], "");
    }
  }
  return str;
}
console.log(removeSpecialCharacters("The quick brown fox!"));

function commonElements(arr1, arr2) {
  let filteredArr = arr1.filter((x, i) => arr2.includes(x));
  return Array.from(new Set(filteredArr));
}
console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
