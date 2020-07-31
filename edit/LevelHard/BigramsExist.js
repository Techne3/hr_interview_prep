// https://edabit.com/challenge/wQGGp6Qce6phDCvW9

function canFind(bigrams, words) {
  let word = words.join("");
  for (let big of bigrams) {
    if (word.indexOf(big) === -1) {
      return false;
    }
  }
  return true;

  // return bigrams.every(x=> words.some(y=> y.includes(x)))
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));

////////////

function secret(num) {
  let a = num.toString().split(``)[0];
  let b = num.toString().split(``)[1];

  return Math.pow(a, b) - a * b;
}

console.log(secret(42));
console.log(secret(52));
