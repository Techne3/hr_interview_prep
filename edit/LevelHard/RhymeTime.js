// https://edabit.com/challenge/p3LHPrDSwr4kYE9ov

function doesRhyme(str1, str2) {
  let res1 = str1
    .split(" ")
    .pop()
    .replace(/[^aeiou]/gi, "");
  console.log(res1);
  let res2 = str2
    .split(" ")
    .pop()
    .replace(/[^aeiou]/gi, "");
  console.log(res2);
  return res1.toUpperCase() == res2.toUpperCase();
}

console.log(doesRhyme("Sam I am!", "Green eggs and ham."));
