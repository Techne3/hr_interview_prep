// https://edabit.com/challenge/wYdQGudMRdzME5B7m

function leader(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...arr.slice(i + 1))) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(leader([2, 3, 20, 15, 1, 3]));
/////////////

function numInStr(arr) {
  return arr.filter((item) => {
    return item.match(/[0-9]/);
  });
}
console.log(numInStr(["1a", "a", "2b", "b"]));
