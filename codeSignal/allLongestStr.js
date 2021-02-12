function allLongestStr(inputArray) {
  let longestLength = inputArray[0].length;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestLength = inputArray[i].length;
    }
  }
  inputArray = inputArray.filter((x) => x.length === longestLength);

  return inputArray;
}

console.log(allLongestStr(["aba", "aa", "adss", "vac", "ddd"]));
