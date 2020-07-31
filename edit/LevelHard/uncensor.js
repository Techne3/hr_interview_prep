// https://edabit.com/challenge/5S5HBQW6zZp8eH3eL

function uncensor(str, vowels) {
  let splitArr = vowels.split("");
  return str.replace(/\*/g, () => splitArr.shift());
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

//////////////////////////
function getDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1 - date2) / oneDay));
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));

//////////////

function lcm(n1, n2) {
  let x = Math.min(n1, n2);
  let y = Math.max(n1, n2);
  if (y % x === 0) {
    return y;
  }

  return x * y;
}

console.log(lcm(9, 18));
console.log(lcm(8, 5));
//////////////////////

function inBox(arr) {
  return arr.some((str) => str.includes("*"));
}

// #####
// #   #
// # * #
// #####

console.log(inBox(["####", "#* #", "#  #", "####"]));
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"]));

///////

function isSastry(number) {
  let plusOne = number + 1;
  let square = Math.sqrt(`${number}${plusOne}`);
  if (square % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(isSastry(183));
console.log(isSastry(184));

//////////

function getMiddle(str) {
  if (str.length % 2 === 0) {
    return str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2);
  }
  return str.charAt(str.length / 2);
}

console.log(getMiddle("test"));
console.log(getMiddle("tests"));
