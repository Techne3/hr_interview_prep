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
