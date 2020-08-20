// https://edabit.com/challenge/HZcpmfBg6NstB5soN

function minSwaps(s1, s2) {
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let count = 0;

  for (let i = 0; i < s1Arr.length; i++) {
    if (s1Arr[i] !== s2Arr[i]) {
      count++;
    }
  }
  return count / 2;
}
console.log(minSwaps("10011001", "01100110"));
////////////////

function sumOfSlices(arr) {
  const ret = [];
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (sum + arr[i] <= 100) {
      sum += arr[i];
    } else {
      ret.push(sum);
      sum = arr[i];
    }
  }
  ret.push(sum);
  return ret;
}

console.log(
  sumOfSlices([
    10,
    29,
    13,
    14,
    15,
    16,
    17,
    31,
    20,
    10,
    29,
    13,
    14,
    15,
    16,
    17,
    31,
    20,
    100,
  ])
);
