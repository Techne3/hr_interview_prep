// https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
//////////////
var maxProduct = function (nums) {
  let sorted = nums.sort((a, b) => b - a);
  return (sorted[0] - 1) * (sorted[1] - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
