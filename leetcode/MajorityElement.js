// https://leetcode.com/problems/majority-element-ii/

function majorityElement(nums) {
  let sets = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] in sets ? (sets[nums[i]] += 1) : (sets[nums[i]] = 1);
  }

  Object.keys(sets).forEach((key) => {
    if (sets[key] > nums.length / 3) res.push(key);
  });

  return res;
}
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
