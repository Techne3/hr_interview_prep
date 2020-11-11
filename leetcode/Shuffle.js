var shuffle = function (nums, n) {
  let ans = [nums[0], nums[n]];

  for (let i = 1; i < n; i++) {
    ans.push(nums[i], nums[i + n]);
    // ans.push(nums[i+n]);
  }

  return ans;
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
