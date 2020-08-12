// https://edabit.com/challenge/c23dFfNiKbnguSQtq

function findNemo(sentence) {
  const strs = sentence.split(" ");
  const index = strs.indexOf("Nemo");
  if (index !== -1) {
    return `I found Nemo at ${index + 1}!`;
  } else {
    return "I can't find Nemo :(";
  }
}
console.log(findNemo("I am finding Nemo !"));
/////////////

function uniqueArr(arr) {
  let positives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    }
  }
  return [...new Set(positives)];
}

console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));

//////////

function sumArray(arr) {
  return arr.flat(Infinity).reduce((a, b) => a + b);
}
console.log(sumArray([1, [2, [1]], 3]));
