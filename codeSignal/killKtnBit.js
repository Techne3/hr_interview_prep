function killKthBit(n, k) {
  let x = n.toString(2).split("").map(Number);
  if (x[x.length - k] !== 0) {
    x[x.length - k] = 0;
    return parseInt((x.join("") + "").replace(/[^01]/gi, ""), 2);
  } else return n;
}
console.log(killKthBit(37, 3));
