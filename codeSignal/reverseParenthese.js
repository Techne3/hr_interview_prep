function reversed(s) {
  if (s.includes("(")) {
    return reversed(reverseRecur(s));
  }
  return s;
}

function reverseRecur(s) {
  let regex = /\(([^()]*)\)/i;
  let substring = regex.exec(s)[1];

  substring = substring.split("").reverse().join("");
  return s.replace(regex, substring);
}

console.log(reversed("a(bc)de"));

function addBoarder(picture) {
  let wall = "*".repeat(picture[0].length);

  picture.unshift(wall);
  picture.push(wall);
  for (let i = 0; i < picture.length; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
}

console.log(addBoarder(["abc", "ded"]));

function arrayChange(inputArray) {
  //   let count = 0;
  //   for (let i = 0; i < inputArray.length - 1; i++) {
  //     if (inputArray[i] >= inputArray[i + 1]) {
  //       let diff = inputArray[i] + 1 - inputArray[i + 1];
  //       inputArray[i + 1] = inputArray[i] + 1;
  //       count += diff;
  //     }
  //   }
  //   return count;
  let moves = 0;

  for (let i = 0; i < inputArray.length; i++) {
    while (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i]++;
      moves++;
    }
  }
  return moves;
}
console.log(arrayChange([1, 1, 1]));
