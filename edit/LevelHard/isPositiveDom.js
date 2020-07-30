// https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

function isPositiveDominant(a) {
  let unique = [...new Set(a)];
  let neg = unique.filter((x) => x < 0).length;
  let pos = unique.filter((x) => x > 0).length;

  return neg >= pos ? false : true;
}

// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([1, 1, 1, 1, 3, -4]));
// console.log(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]));
console.log(isPositiveDominant([1, 0, 0, -1]));

////////

function countBoomerangs(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
      result++;
    }
  }

  return result;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
