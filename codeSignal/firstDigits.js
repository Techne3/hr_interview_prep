function firstDigits(inputString) {
  let digits = "1234567890".split("");

  inputString = inputString.split("");
  result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (digits.includes(inputString[i])) {
      result += inputString[i];
    }
  }
  result;
}
console.log(firstDigits("var_1_Int"));
