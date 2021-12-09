function insertString(r, s, n) {
  return r.substring(0, n) + s + r.substring(n, r.length);
}

console.log(insertString('Hello World', 'Cats', 4));

/////

function insertS(r, s, n) {
  for (let i = 0; i < r.length; i++) {
    if (i == n) {
      r = r.substring(0, i) + s + r.substring(i, r.length);
    }
  }
  return r;
}
console.log(insertS('Hello World', 'cat', 4));

function insertString(s, r, n) {
  for (let i = 0; i < s.length; i++) {
    if (i == n) {
      s = s.substring(0, i) + r + s.substring(i, s.length);
    }
  }
  return s;
}

function duplicates(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      arr.push(s[i]);
    }
  }
  return arr;
}

console.log(duplicates('Hello World'));
