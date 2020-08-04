// https://edabit.com/challenge/uXf7RQ5am84tup7mQ

function rps(p1, p2) {
  //   if (
  //     (p1 === "Paper" && p2 === "Rock") ||
  //     (p1 === "Scissors" && p2 === "Paper") ||
  //     (p1 === "Rock" && p2 === "Scissors")
  //   ) {
  //     return "The winner is p1";
  //   } else if (p1 === p2) {
  //     return "It's a draw";
  //   } else {
  //     return "The winner is p2";
  //   }

  let w = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  };
  if (p1 === p2) return "It's a draw";
  return `The winner is ${w[p1] === p2 ? "p1" : "p2"}`;
}

console.log(rps("Rock", "Paper"));
console.log(rps("Scissors", "Paper"));
//////////////////

function XO(str) {
  let x = str.split("").filter((x) => x.toLowerCase() === "x").length;
  let o = str.split("").filter((o) => o.toLowerCase() === "o").length;

  return x === o ? true : false;
}

console.log(XO("xooxx"));
// console.log(XO("xoox"))
