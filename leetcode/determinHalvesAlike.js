function halvesAlike(s) {
  let vowels = {
    a: "a",
    e: "e",
    i: "o",
    u: "u",
  };

  s = s.toLowerCase();
  let count = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels[s[i]]) {
      count++;
    }
  }
  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels[s[i]]) {
      count--;
    }
  }
  return count === 0;
}
console.log(halvesAlike("book"));
