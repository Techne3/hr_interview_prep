// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let diff = inputArray[i] + 1 - inputArray[i + 1];
      console.log(diff);
      inputArray[i + 1] = inputArray[i] + 1;
      count += diff;
    }
  }
  return count;
}

console.log(arrayChange([-1000, 0, -2, 0]));
