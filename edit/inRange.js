// https://edabit.com/challenge/v5TorwH9tiNtddSY3

function getSequence(low, high) {
  counter = [];
  for (let i = low; i <= high; i++) {
    counter.push(i);
  }
  return counter;
}

console.log(getSequence(1, 5));

function removeFirstLast(str) {
  return str.length <= 2 ? str : str.slice(1, -1);
}

console.log(removeFirstLast("a"));
console.log(removeFirstLast("catter"));

function minimumRemovals(arr) {
  let added = arr.reduce((a, b) => a + b);
  return added % 2 === 0 ? 0 : 1;
}

console.log(minimumRemovals([1, 2, 3, 4, 5]));
console.log(minimumRemovals([5, 7, 9, 11]));
