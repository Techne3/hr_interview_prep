// https://leetcode.com/problems/maximum-69-number/

var maximum69Number = function (num) {
  //   const res = `${num}`;
  const res = num.toString().split("").join("");
  console.log(res);

  for (const char of res) {
    if (char === "6") {
      return res.replace(char, "9");
    }
  }

  return res;
};

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));

function makeTitle(str) {
  return str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}
console.log(makeTitle("This is a title"));
