// https://edabit.com/challenge/HLvES6FKvbFGPXs7X

function findZip(str) {
  return str.indexOf("zip", str.indexOf("zip") + 1);
}

console.log(findZip("all zip files are zipped"));
////////////

function nextInLine(arr, num) {
  if (!Array.isArray(arr) || null) {
    return "No array has been selected";
  }
  return arr.slice(1).concat(num);
}

console.log(nextInLine([], 1));
