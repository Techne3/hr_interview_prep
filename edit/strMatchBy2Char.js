function strMatchBy2char(a, b) {
  let aArray = [];
  let bArray = [];

  let minLength = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < minLength - 1; i++) {
    aArray.push(a[i] + a[i + 1]);
    bArray.push(b[i] + b[i + 1]);
  }
  console.log(aArray);
  console.log(bArray);

  return aArray.filter((ele, i) => ele === bArray[i]).length;
}
console.log(strMatchBy2char("yytaazz", "yyjaaz"));
