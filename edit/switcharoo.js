// https://edabit.com/challenge/2dcXsuTD68iRK5MiT

function flipEndChars(str) {
  if (typeof str !== "string" || str.length < 2) return "Incompatible.";

  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[0] === strArr[strArr.length - 1] && strArr.length > 2) {
      return "Two's a pair.";
    } else {
      let first = strArr[0];
      let last = strArr[strArr.length - 1];
      let rest = strArr.slice(1, -1).join("");
      return `${last}${rest}${first}`;
    }
  }
}

console.log(flipEndChars("Cat, dog, and mouse."));
console.log(flipEndChars("z"));
console.log(flipEndChars("Ada"));
console.log(flipEndChars("ada"));
console.log(flipEndChars([1, 2, 4]));
/////////////////

function multiply(arr) {
  return arr.map((x) => Array(arr.length).fill(x));
}
console.log(multiply([4, 5]));
///////
function stripSentence(str, chars) {
  return str.replace(RegExp(`[${chars}]`, "g"), "");
}

console.log(
  stripSentence("the quick brown fox jumps over the lazy dog", "aeiou")
);

///////////

function uniqueInOrder(sequence) {
  return [...sequence].filter((a, i) => a !== sequence[i + 1]);
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

//////////////

function isPalindrome(str) {
  if (str.length < 2) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }

  return false;
}

console.log(isPalindrome("abassaba"));

function isPalindromed(string) {
  let sanitized = string.toLowerCase().replace(/[^a-z]/g, "");
  console.log(sanitized);
  let reversed = sanitized.split("").reverse().join("");
  return reversed == sanitized;
}

console.log(
  isPalindromed(
    "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!"
  )
);
