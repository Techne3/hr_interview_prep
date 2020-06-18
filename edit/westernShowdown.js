// https://edabit.com/challenge/9N7zA5oiu6v5nhuBm

function showdown(p1, p2) {
  let firstPlayer = p1.indexOf("Bang");
  let secondPlayer = p2.indexOf("Bang");
  return firstPlayer === secondPlayer
    ? "tie"
    : firstPlayer > secondPlayer
    ? "p1"
    : "p2";
}

console.log(showdown("   Bang", "      Bang"));
