let arrayPairSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  }); //sort the array

  let result = 0;

  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }
  return result;
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
