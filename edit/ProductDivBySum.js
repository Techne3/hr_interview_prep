// https://edabit.com/challenge/aJzvBZgp8nzwSk94A

function divisible(arr) {
  let mult = arr.reduce((a, b) => a * b);

  let add = arr.reduce((a, b) => a + b);

  return mult % add === 0 ? true : false;
}
console.log(divisible([4, 2, 6]));
console.log(divisible([3, 2, 4, 1]));
