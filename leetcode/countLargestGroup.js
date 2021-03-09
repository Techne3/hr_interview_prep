function countLargestGroup(n) {
  let output = 0;
  let maxSize = 0;
  let count = {};

  for (let i = 1; i <= n; i++) {
    let num = i;
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    count[sum] = (count[sum] || 0) + 1;
    maxSize = Math.max(maxSize, count[sum]);
  }

  for (let key in count) {
    if (count[key] === maxSize) {
      output++;
    }
  }
  return output;
}

console.log(countLargestGroup(13));

console.log(13 % 10);
console.log(Math.floor(13 / 10));
////////////////////////////////////////////////////////////////

const countLargestGroups = (n) => {
  let map = {},
    max = 1;

  for (let i = 1; i <= n; i++) {
    let sum = [...`${i}`].reduce((a, c) => a + +c, 0);
    map[sum] ? map[sum]++ : (map[sum] = 1);
    max = Math.max(max, map[sum]);
  }
  return Object.values(map).filter((x) => x === max).length;
};
console.log(countLargestGroups(13));
