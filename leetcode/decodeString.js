function decode(s) {
  let multiply = [];
  let tempMult = [];
  let repeatStr = [];
  let solution = "";

  for (let char of s) {
    if (!isNaN(char)) {
      tempMult = `${tempMult}${char}`;
      console.log(tempMult);
    } else if (char === "[") {
      multiply.push(tempMult);
      tempMult = "";
      console.log(tempMult);

      repeatStr.push(solution);
      solution = "";
    } else if (char === "]") {
      solution = repeatStr.pop() + solution.repeat(multiply.pop());
    } else {
      solution += char;
    }
  }
  return solution;
}

console.log(decode("3[a]2[bc]"));
