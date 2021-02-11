function longestDigit(inputString) {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  inputString = inputString.split("");
  let result = [];

  for (let i = 0; i < inputString.length; i++) {
    if (digits.includes(inputString[i]) === false) {
      break;
    }
    result.push(inputString[i]);
  }
  return result.join("");
}

console.log(longestDigit("123aa1"));
