function variableName(name) {
  return /^[a-z_]\w*$/i.test(name);
}

console.log(variableName("ar_1_Int"));

// function adjacentEleProduct(inputArray) {
//   let elements = [];

//   for (let i = 0; i < inputArray.length-1; i++) {
//     elements.push(inputArray[i] * inputArray[i + 1]);
//   }
//   console.log(elements);

//   return Math.max(...elements);
// }
// console.log(adjacentEleProduct([3, 6, -2, -5, 7, 3]));
function adjacentEleProduct(inputArray) {
  let product = inputArray[0] * inputArray[1];

  console.log(product);

  for (let i = 0; i < inputArray.length; i++) {
    product =
      inputArray[i] * inputArray[i + 1] >= product
        ? inputArray[i] * inputArray[i + 1]
        : product;
  }
  return product;
}
console.log(adjacentEleProduct([3, 6, -2, -5, 7, 3]));

function centuryFromYear(year) {
  let valueToCheck = year / 100;

  if (year % 100 === 0) {
    return valueToCheck;
  }

  return Math.floor(valueToCheck) + 1;
}
console.log(centuryFromYear(1900));
