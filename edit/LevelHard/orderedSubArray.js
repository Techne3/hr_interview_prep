function isOrdSub(smarr, bigarr) {
  for (const n of bigarr) {
    console.log(n);
    if (smarr[0] === n) {
      smarr.shift();
    }
  }

  return smarr.length;
}

console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]));
// console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]));
