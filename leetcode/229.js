var majorityElement = function (nums) {
  var sets = {};
  var res = [];

  for (var i = 0; i < nums.length; i++) {
    nums[i] in sets ? (sets[nums[i]] += 1) : (sets[nums[i]] = 1);
  }

  Object.keys(sets).forEach((key) => {
    if (sets[key] > nums.length / 3) res.push(key);
  });

  return res;
};
