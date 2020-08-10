// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function allLongestStrings(inputArray) {
  let longestLength = inputArray[0].length;

  for (let i = 0; i < inputArray.length; i++) {
    if (longestLength < inputArray[i].length) {
      longestLength = inputArray[i].length;
    }
  }
  return inputArray.filter((x) => x.length === longestLength);
}

console.log(allLongestStrings(["aba", "aacc", "ad", "vcdc", "aba"]));
