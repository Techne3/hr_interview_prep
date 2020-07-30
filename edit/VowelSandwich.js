// https://edabit.com/challenge/cSymahmP7vfHSm2jF

function isVowelSandwich(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  if (str.length === 3) {
    if (
      !vowel.includes(str[0]) &&
      vowel.includes(str[1]) &&
      !vowel.includes(str[2])
    ) {
      return true;
    }
  }
  return false;
}

console.log(isVowelSandwich("cat"));
console.log(isVowelSandwich("ear"));
//////////////////////

// https://edabit.com/challenge/LEPFNs6sgeAnJ7qqo

function evenlyDivisible(a, b, c) {
  let total = 0;
  for (i = a; a <= b; a++) {
    if (a % c === 0) {
      total += a;
    }
  }
  return total;
}

console.log(evenlyDivisible(1, 10, 2));

/////////////////

function testJackpot(result) {
  return new Set(result).size === 1;
  return result.every((x) => result[0] === x);
}

console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
