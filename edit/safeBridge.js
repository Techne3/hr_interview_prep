// https://edabit.com/challenge/YjkNx49pk7Eois9pi

function isSafeBridge(str) {
  let splt = str.split("");
  return splt.includes(" ") ? false : true;
}

console.log(isSafeBridge("####"));
console.log(isSafeBridge("### #"));

function findEvenNums(num) {
  results = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      results.push(i);
    }
  }
  return results;
}

console.log(findEvenNums(8));
