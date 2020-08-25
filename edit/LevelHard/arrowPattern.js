// https://edabit.com/challenge/cEcDMjnmdnYYosHzQ
function arrow(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(">".repeat(i));
  }
  if (n % 2 != 0) {
    n -= 1;
  }
  for (let i = n; i >= 1; i--) {
    arr.push(">".repeat(i));
  }
  return arr;

  //   let firstHalf = [];
  //   let secondHalf = [];
  //   for (let i = 1; i <= n; i++) {
  //     firstHalf.push(">".repeat(i));
  //     secondHalf.push(">".repeat(i));
  //   }
  //   let r = secondHalf.reverse();

  //   if (n % 2 === 0) {
  //     return firstHalf.concat(r);
  //   } else {
  //     return firstHalf.concat(r.slice(1));
  //   }
}

console.log(arrow(5));
/////////////

function toHex(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let hex = Number(str.charCodeAt(i)).toString(16);
    result.push(hex);
  }
  return result.join(" ");
}
console.log(toHex("hello world"));
