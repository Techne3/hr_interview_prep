// https://edabit.com/challenge/BsCHQ6fyzmrTYLNsR

function evenOddPartition(arr) {
  let odd = [...arr].filter((x) => x % 2 !== 0);
  let even = [...arr].filter((x) => x % 2 === 0);
  return [even, odd];
}
console.log(evenOddPartition([5, 8, 9, 2, 0]));

function isStrangePair(str1, str2) {
  let a = str1.split("");
  let b = str2.split("");
  return a.pop() == b.shift() && a.shift() == b.pop();
}

console.log(isStrangePair("ratio", "orator"));
console.log(isStrangePair("ratios", "orator"));

function isStrangePairs(str1, str2) {
  return str1[0] && str1[str1.length - 1] === str2[0] && str2[str2.length - 1]
    ? true
    : false;
}

console.log(isStrangePairs("ratio", "orator"));
console.log(isStrangePairs("ratios", "orator"));
