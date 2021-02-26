function twoSums(nums, target) {
  //   let result = [];

  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         result.push(i);
  //       }
  //     }
  //   }

  //   return result;

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

console.log(twoSums([2, 7, 11, 15], 9));
