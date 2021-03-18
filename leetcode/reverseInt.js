function reverse(x) {
  if (x > 2 ** 31 - 1) return 0;
  let reversed = parseInt(
    (x + "").replace("-", "").split("").reverse().join("")
  );

  return x < 0 ? reversed * -1 : reversed;
}

console.log(reverse(-123));
console.log(reverse(120));
