// https://edabit.com/challenge/TeadejgLka6ZxKhWM

function remix(str, arr) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i];
  }
  return result.join("");
}

console.log(remix("abcd", [0, 3, 1, 2]));
///////////////

function potatoes(str) {
  return str.match(/potato/gi).length;
}
console.log(potatoes("potatopotato"));
///////////

const reverseString = (string) => string.split("").reduce((a, b) => b + a, "");
console.log(reverseString("cat"));
