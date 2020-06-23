// 1470. Shuffle the Array

// https://leetcode.com/problems/shuffle-the-array/

let shuffle = function (nums, n) {
  let shuffleArr = [];
  for (let i = 0; i < nums.length / 2; i++) {
    shuffleArr.push(nums[i], nums[i + n]);
  }
  return shuffleArr;
};

console.log(shuffle([1, 1, 2, 2], 2));
