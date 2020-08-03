// https://edabit.com/challenge/sq7ZNMhAZ5ao8BMum

function acceptedWords(arr) {
  return arr.filter((x, i) => !x.startsWith("C"));
}

console.log(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"]));
console.log(acceptedWords(["cans", "Worms", "Bugs", "Cold", "Beans"]));
///////////////////////
function abcmath(a, b, c) {
  sum = a + a;
  for (let i = 1; i < b; i++) {
    sum += sum;
  }
  return sum % c === 0;
}

console.log(abcmath(42, 5, 10));
console.log(abcmath(69, 15, 2));
//////////////////

function getDiscounts(nums, d) {
  let discountedArr = [];
  for (let i = 0; i < nums.length; i++) {
    discountedArr.push((nums[i] * parseFloat(d)) / 100);
  }
  return discountedArr;
}
console.log(getDiscounts([2, 4, 6, 11], "50%"));

///////////////
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({ 1: "b" }));
console.log(isEmpty({}));
////////////

function clone(arr) {
  arr.push([...arr]);
  return arr;
}

console.log(clone([1, 2, 3]));
