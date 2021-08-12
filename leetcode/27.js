var removeElement = function (nums, val) {
  let index = nums.indexOf(parseInt(val));

  if (index > -1) {
    nums.splice(index, 1);
    removeElement(nums, val);
  } else {
    return nums.length;
  }
};
