// https://edabit.com/challenge/GABaDpxGZGFBdQPjs
function stupidAddition(a, b) {
  if (typeof a !== typeof b) {
    return null;
  }
  if (typeof a && typeof b === "string") {
    return Number(a) + Number(b);
  }
  if (typeof a && typeof b === "number") {
    return `${a}${b}`;
  }
}

console.log(stupidAddition("1", "4"));
console.log(stupidAddition(1, 4));
console.log(stupidAddition(1, "1"));

// //////////////

function cars(wheels, bodies, figures) {
  let neededWheels = Math.floor(wheels / 4);
  let neededFigures = Math.floor(figures / 2);

  return Math.min(neededFigures, neededWheels, bodies);
}

console.log(cars(43, 15, 87));

///////

function isPalindrome(n) {
  let stringNum = n.toString();
  let reverseStr = n.toString().split("").reverse().join("");

  return stringNum === reverseStr ? true : false;

  //// much easier solution
  //   return String(n).split('').reverse().join('') === String(n)
}

console.log(isPalindrome(443344));
console.log(isPalindrome(43344));

//////////
function lettersOnly(str) {
  return str.replace(/[^A-Za-z]/g, "");
  // return str.match(/[A-Za-z]/g).join("");
}
console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));

// Recursive

function sum(arr) {
  if (!arr.length) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}
console.log(sum([1, 2, 3, 4]));
console.log(sum([]));
