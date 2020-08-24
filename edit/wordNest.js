// https://edabit.com/challenge/yDQnwtscs6sRi27we

function wordNest(word, nest) {
  let result = -1;

  while (nest.indexOf(word) !== -1) {
    result++;
    nest = nest.replace(word, "");
  }
  return result;
}

console.log(wordNest("code", "cocodccococodededeodeede"));
