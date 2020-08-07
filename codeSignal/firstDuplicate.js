function firstDuplicate(a) {
  let map = {};
  for (let i = 0; i < a.length; i++) {
    if (map[a[i]] !== undefined) {
      return a[i];
    } else {
      map[a[i]] = i;
    }
  }
  return -1;
}

console.log(firstDuplicate("abcdab"));

const FD = (b) => {
  let r = new Set();
  for (letter of b) {
    if (r.has(letter)) {
      return letter;
    } else {
      r.add(letter);
    }
  }
  return -1;
};

console.log(FD("cbcba"));
