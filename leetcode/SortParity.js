// https://leetcode.com/problems/sort-array-by-parity-ii/

function sortArrayByParity(A) {
  let evenNums = A.filter((i) => i % 2 === 0);
  let oddNums = A.filter((i) => i % 2 !== 0);

  let res = [];
  for (let i = 0; i < A.length / 2; i++) {
    res.push(evenNums[i], oddNums[i]);
  }

  return res;
}

console.log(sortArrayByParity([4, 2, 5, 7]));

// ///

var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  return target.join("") === arr.join("");
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
console.log(canBeEqual([7], [7]));
