// https://edabit.com/challenge/hxyvTffvdT4E238CY

function testJackpot(result) {
  // return result.every(x => x === result[0]);
  //    return new Set([...result]).size === 1
  let jack = new Set([...result]);
  return jack.size === 1 ? true : false;
}

console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["@", "@", "@", "!"]));

///////////////
function mysteryFunc(arr, num) {
  let modded = arr.map((x) => x % num);
  console.log(modded);
}

console.log(mysteryFunc([5, 7, 8, 2, 1], 2));

// recursion

function sum(n) {
  if (n <= 1) return 1;
  return n + sum(n - 1);
}

console.log(sum(5));

function sumPlus(n) {
  let i = 0;
  let results = [];
  while (i < n) {
    i++;
    results.push(i);
  }
  return results.reduce((a, b) => a + b);
}
console.log(sumPlus(5));
