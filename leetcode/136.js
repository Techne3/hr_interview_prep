var singleNumber = function (nums) {
  nums = nums.sort();
  for (i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 2);
      i = 0;
    }
  }
  return nums[0];
};
console.log(singleNumber([1, 2, 3, 2, 3]));
