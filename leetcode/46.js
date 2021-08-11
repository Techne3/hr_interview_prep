let result;
var permute = function (nums) {
  result = [];
  recursive(nums);
  return result;
};

var recursive = function (nums, set = new Set()) {
  if (set.size == nums.length) {
    result.push([...set]); // spread the set into the array
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) continue; // to get the unique number
      set.add(nums[i]);
      recursive(nums, set);
      set.delete(nums[i]);
    }
  }
};
