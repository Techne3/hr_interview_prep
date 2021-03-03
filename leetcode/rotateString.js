function rotateString(A, B) {
  if (A.length !== B.length) return false;
  return (A + A).indexOf(B) !== -1;
}

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
