var subsetXORSum = function (nums) {
  var n = nums.length;
  if (n === 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 1; i < 1 << n; i++) {
    var subset = [];
    for (var j = 0; j < n; j++)
      if (i & (1 << j)) {
        subset.push(nums[j]);
      }
    var cur = subset.reduce((acc, cur) => acc ^ cur);
    sum += cur;
  }
  return sum;
};
