// https://edabit.com/challenge/yDQnwtscs6sRi27we

function wordNest(word, nest) {
  let result = -1;

  while (nest.includes(word)) {
    result++;
    nest = nest.replace(word, "");
  }
  return result;
}

console.log(wordNest("code", "cocodccococodededeodeede"));
////////////////

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  if (Object.keys(GUEST_LIST).find((x) => x == name)) {
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
  } else {
    return "Hi! I'm a guest.";
  }
}

console.log(greeting("Karla"));
//////////////////

function stepsToConvert(str) {
  let strArr = str.split("");
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }

  return upper < lower ? upper : lower;
}

console.log(stepsToConvert("abC"));
/////////////////

function letterAtPosition(n) {
  if (!Number.isInteger(n) || n === 0) return "invalid";
  return String.fromCharCode(96 + n);
}

console.log(letterAtPosition(1));
console.log(letterAtPosition(0.2));
//////////////////////

function testFairness(agatha, bertha) {
  // let a = 0;
  // let b = 0;
  // for (let i = 0; i < bertha.length; i++) {
  //   b += bertha[i][0] * bertha[i][1];
  // }
  // for (let i = 0; i < agatha.length; i++) {
  //   a += agatha[i][0] * agatha[i][1];
  // }
  // return a === b;

  return (
    agatha.reduce((a, c) => (a += c[0] * c[1]), 0) ===
    bertha.reduce((a, c) => (a += c[0] * c[1]))
  );
}
console.log(
  testFairness(
    [
      [1, 5],
      [6, 3],
      [1, 1],
    ],
    [
      [7, 1],
      [2, 2],
      [1, 1],
    ]
  )
);
