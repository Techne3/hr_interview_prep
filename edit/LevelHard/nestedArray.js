// https://edabit.com/challenge/yXSTvCNen2DQHyrh6

function getLength(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.join(",").split(",").length;
  // return arr.flat(Infinity).length
}

console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

//////////

function uniqueSort(arr) {
  let sorted = arr.sort((a, b) => a - b);
return [...new Set(sorted)];
//   return Array.from(dup);
}
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
