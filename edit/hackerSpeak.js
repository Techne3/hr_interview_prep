// https://edabit.com/challenge/cada8J3AWGRhwQhkk

function hackerSpeak(str) {
  let hack = {
    a: 4,
    e: 3,
    i: 1,
    o: "0",
    s: 5,
  };

  for (let i = 0; i < str.length; i++) {
    if (hack[str[i]]) {
      str = str.replace(str[i], hack[str[i]]);
    }
  }
  return str;
}

console.log(hackerSpeak("javascript is cool"));

//////

function factorize(num) {
  let result = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(factorize(12));

///////////

function capMe(arr) {
  //   return arr.map((x) => x[0].toUpperCase() + x.substr(1));
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
  return result;
}

console.log(capMe(["mavis", "senaida", "letty"]));
///////////////

function numOfSubbarrays(arr) {
  return arr.filter(Array.isArray).length;
}

console.log(numOfSubbarrays([[2, 3, 4]]));
/////////////

function fracRound(frac, n) {
  // let evaluated = eval(frac).toFixed(n)
  // return `${frac} rounded to ${n} decimal places is ${evaluated}`

  let f = frac.split("/");
  return `${frac} rounded to ${n} decimal places is ${(f[0] / f[1]).toFixed(
    n
  )}`;
}

console.log(fracRound("1/3", 5));
///////////

function flatten(arr) {
  // return [...arr].flat();
  return arr.reduce((a, b) => a.concat(b));
}
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
///////

function formatMath(expr) {
  let rep = expr.replace("x", "*");
  return expr + " = " + eval(rep);
}
console.log(formatMath("3 x 4"));
