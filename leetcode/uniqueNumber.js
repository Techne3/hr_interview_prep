function uniqueNum(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  let count = Object.values(map);
  return count.length === new Set(count).size;
}
console.log(uniqueNum([1, 2, 2, 1, 1, 3]));
////////////////

function findNumbers(nums) {
  let evenCount = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      evenCount.push(nums[i]);
    }
  }
  return evenCount;
}
console.log(findNumbers([12, 345, 2, 6, 7896]));
