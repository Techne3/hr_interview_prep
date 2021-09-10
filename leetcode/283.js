var moveZeroes = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      var temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
    }
  }
};
