// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

function maxProduct(nums) {
  let maxArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      maxArr.push((nums[i] - 1) * (nums[j] - 1));
    }
  }
  return Math.max(...maxArr);
}

console.log(maxProduct([3, 4, 5, 2]));
//////////

var restoreString = function (s, idx) {
  const results = [];
  for (let i = 0; i < s.length; i++) {
    results[idx[i]] = s[i];
  }
  return results.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
