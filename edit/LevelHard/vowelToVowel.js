function vowelLinks(str) {
  let words = str.split(" ");
  let v = ["a", "i", "e", "o", "u", "A", "I", "E", "O", "U"];
  for (let i = 0; i < words.length - 1; i++) {
    if (
      v.includes(words[i].charAt(words[i].length - 1)) &&
      v.includes(words[i + 1].charAt(0))
    ) {
      return true;
    }
  }

  return false;
}
console.log(vowelLinks("a very large appliance"));
// console.log(vowelLinks("what are these elephante"));
