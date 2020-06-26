// https://edabit.com/challenge/8bNad58igHWorsf6S

function binaryToDecimal(binary) {
  let binaryAdd = binary.reverse().map((x, i) => x * 2 ** i);
  return binaryAdd.reduce((acc, x) => acc + x, 0);

  //   return parseInt(binary.join(''),2)
}
console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]));

////////////////////
function bbqSkewers(grill) {
  let nonVeg = grill.filter((x, i) => x.includes("x")).length;
  let veg = grill.length - nonVeg;
  return [veg, nonVeg];
}

console.log(
  bbqSkewers([
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--",
  ])
);

function multiplyNums(nums) {
  return Number(nums.split(", ").reduce((x, y) => x * y));
}

console.log(multiplyNums("2, 3"));
console.log(multiplyNums("2"));
