// https://edabit.com/challenge/tmnCStcrkdWbreKP5

function getBudgets(arr) {
  //   let budgets = arr.map((el) => el.budget);
  //   return budgets.reduce((a, b) => a + b);

  return arr.reduce((a, b) => a + b.budget, 0);
}
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);
/////////////

function oneOddOneEven(n) {
  //   let strN = Array.from(String(n), Number);
  //   if (
  //     (strN[0] % 2 !== 0 && strN[1] % 2 === 0) ||
  //     (strN[0] % 2 === 0 && strN[1] % 2 !== 0)
  //   ) {
  //     return true;
  //   }
  //   return false;

  let arr = Array.from(String(n), Number);
  //   let arr = [...String(n)];
  console.log(arr);
  return !arr.every((x) => x % 2 === 0) && !arr.every((x) => x % 2 !== 0);
}

console.log(oneOddOneEven(12));
console.log(oneOddOneEven(41));
console.log(oneOddOneEven(13));
