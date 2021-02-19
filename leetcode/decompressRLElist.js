var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let val = nums[i + 1];
    console.log(freq);
    console.log(val);

    for (let i = 0; i < freq; i++) {
      result.push(val);
    }
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4]));
