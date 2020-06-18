// https://edabit.com/challenge/zvFri3sia4iNPTeqC

function checkPalindrome(str) {
  let splitStr = str.split("").reverse().join("");
  return splitStr === str ? true : false;
}

console.log(checkPalindrome("cat"));
