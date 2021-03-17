function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midPoint = Math.floor((left + right) / 2);

    if (nums[midPoint] > nums[right]) {
      left = midPoint;
    } else {
      right = midPoint;
    }
  }

  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2]));
