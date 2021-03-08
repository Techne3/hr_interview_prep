function diStringMatch(s) {
  let l = 0;
  let h = s.length;

  let size = s.length + 1;
  let output = new Array(size);
  for (let i = 0; i < size; i++) {
    if (s[i] === "I") {
      output[i] = l;
      l++;
    } else {
      output[i] = h;
      h--;
    }
  }
  return output;
}

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDD"));
