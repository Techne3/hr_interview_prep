function numOfCon(allowed, words) {
  let count = 0;

  for (let w of words) {
    if (w.split("").every((x) => allowed.includes(x))) {
      count++;
    }
  }
  return count;
}

console.log(numOfCon("ab", ["ad", "bd", "aaab", "baa", "badab"]));
