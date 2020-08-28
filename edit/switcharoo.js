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
