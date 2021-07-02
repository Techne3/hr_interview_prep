var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);

  if (index > -1) return index;
  if (nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    }
  }
};
