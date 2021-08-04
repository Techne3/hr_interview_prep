var jump1 = function (nums) {
  if (nums.length < 2) return 0;
  let arr = new Array(nums.length).fill(Infinity);
  arr[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    let jumpLength = nums[i];
    if (i + 1 + jumpLength >= nums.length) return arr[i] + 1;
    for (let j = i + 1; j < i + jumpLength + 1; j++) {
      arr[j] = Math.min(arr[i] + 1, arr[j]);
    }
  }
};
