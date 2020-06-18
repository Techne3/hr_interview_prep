// https://www.hackerrank.com/challenges/beautiful-triplets/problem

function beautifulTriplets(d, arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
      result++;
    }
  }
  return result;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));

function BT(d, arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[k] - arr[j] === d) {
            total++;
          }
        }
      }
    }
  }
  return total;
}

console.log(BT(3, [1, 2, 4, 5, 7, 8, 10]));
