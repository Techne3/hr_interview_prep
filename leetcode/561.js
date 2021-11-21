let arrayPairSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  }); //sort the array

  let result = 0;
  console.log(nums);

  for (let i = 0; i < nums.length; i += 2) {
    console.log(nums[i]);
    console.log(i);
    result += nums[i];
    console.log(result);
  }
  return result;
};

// console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
