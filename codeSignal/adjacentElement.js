// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    max =
      inputArray[i] * inputArray[i + 1] >= max
        ? inputArray[i] * inputArray[i + 1]
        : max;
  }
  return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
////////////
// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function makeArrayConsecutive2(statues) {
  let count = [];
  statues.sort((a, b) => a - b);
  let min = statues[0];
  let max = statues[statues.length - 1];
  for (let i = min; i < max; i++) {
    console.log(i);
    if (statues.indexOf(i) === -1) {
      count.push(i);
    }
  }
  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
