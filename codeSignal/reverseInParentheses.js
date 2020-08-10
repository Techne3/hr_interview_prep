// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

const reverseParentheses = (inputString) => {
  let reversed = (str) => str.split("").reverse().join("");
  while (inputString.includes("(")) {
    let l = inputString.lastIndexOf("(");
    let r = inputString.indexOf(")", inputString.lastIndexOf("("));
    inputString =
      inputString.slice(0, l) +
      reversed(inputString.slice(l + 1, r)) +
      (r + 1 === inputString.length
        ? inputString.slice(r, -1)
        : inputString.slice(r + 1));
  }
  return inputString;
};

console.log(reverseParentheses("foo(bar)baz"));
