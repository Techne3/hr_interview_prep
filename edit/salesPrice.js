// https://edabit.com/challenge/uqTGMSityHMYL7W5s

function profitMargin(cost, sales) {
  return (((sales - cost) * 100) / sales).toFixed(1) + "%";
}
console.log(profitMargin(28, 39));
console.log(profitMargin(50, 50));

/////////
function deNest(arr) {
  return arr.flat(Infinity)[0];
}
console.log(deNest([[[[[[[[[[[["cat"]]]]]]]]]]]]));

/////////

function preventDistractions(str) {
  let bad = ["anime", "meme", "vine", "roasts", "Danny DeVito"];

  let filteredBad = bad.filter((x) => str.includes(x));

  return filteredBad.length ? "No!" : "Safe Watching!";

  // let avoid = ["anime", "meme", "vines", "roasts", "Danny", "DeVito"]
  // return str.split(' ').filter(a => avoid.includes(a)).length > 0 ? "NO!" : "Safe watching!"
}

console.log(preventDistractions("vines that butter my eggroll"));
console.log(preventDistractions("butter my eggroll"));

function same(a1, a2) {
  let firstArr = [...new Set(a1)];
  // firstArr = new Set(a1).size
  let secondArr = [...new Set(a2)];
  //  let secondArr = new Set(a2).size
  return firstArr.length === secondArr.length ? true : false;
}

console.log(same([1, 3, 4, 4, 4], [2, 5, 7]));
console.log(same([9, 8, 7, 6], [4, 4, 3, 1]));
