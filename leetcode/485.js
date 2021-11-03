var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    if (nums[i + 1] !== 1 && count > maxLen) maxLen = count;
    if (nums[i] === 0) count = 0;
  }

  return maxLen;
};
///////////

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
};
