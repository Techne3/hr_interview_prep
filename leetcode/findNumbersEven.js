// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function (nums) {
  var even = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      even++;
    }
  }
  return even;
};

console.log(findNumbers([555, 901, 482, 1771]));
