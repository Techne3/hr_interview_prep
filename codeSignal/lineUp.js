function lineUp(commands) {
  let result = 0;

  let a = 0;
  let b = 0;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "A") {
      a += 2;
      b += 2;
    } else if (commands[i] === "L") {
      a += 1;
      b -= 1;
      b += 4;
    } else if (commands[i] === "R") {
      a -= 1;
      b += 1;
      a += 4;
    }
    a = a % 4;
    b = b % 4;

    if (a === b) {
      result++;
    }
  }

  return result;
}

console.log(lineUp("RLR"));
