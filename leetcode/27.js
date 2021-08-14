var removeElement = function (nums, val) {
  let newLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      continue;
    }
    nums[newLen] = nums[i];
    newLen++;
  }
  return newLen;
};

console.log(removeElement([3, 2, 2, 2, 34, 3], 3));
