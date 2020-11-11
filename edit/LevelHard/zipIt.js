function zipIt(women, men) {
  let pairs = [];
  if (women.length !== men.length) {
    return "sizes don't match";
  } else {
    for (let i = 0; i < women.length; i++) {
      pairs.push([women[i], men[i]]);
    }
  }
  return pairs;
}

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
////

function ascDesNone(arr, str) {
  return str == "Asc"
    ? arr.sort((a, b) => a - b)
    : str === "Des"
    ? arr.sort((a, b) => b - a)
    : arr;
}

console.log(ascDesNone([4, 3, 2, 1], "Asc"));
console.log(ascDesNone([4, 3, 2, 1, 5], "Des"));
console.log(ascDesNone([4, 3, 2, 1], "None"));
////

function tempConversion(celsius) {
  let fahren = ((celsius * 9) / 5 + 32).toFixed(2);
  let kel = (celsius + 273.15).toFixed(2);
  if (kel < 0) {
    return "Invalid";
  }
  return [Number(fahren), Number(kel)];
}

console.log(tempConversion(-273.16));
/////////

function commonElements(arr1, arr2) {
  let filtArr = arr1.filter((x) => arr2.includes(x));
  return Array.from(new Set(filtArr));
}
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));
///////

function isPositiveDominant(a) {
  let pos = a.filter((x) => x > 0);
  let negs = a.filter((x) => x < 0);

  let uniquePos = new Set(pos).size;
  let uniqueNeg = new Set(negs).size;

  return uniquePos > uniqueNeg;
}
console.log(isPositiveDominant([5, 99, 832, -3, -4]));
///

function firstRepeat(chars) {
  let splitter = chars.split("");
  let result = [];

  for (let i = 0; i < splitter.length; i++) {
    if (chars.indexOf(splitter[i]) !== chars.lastIndexOf(splitter[i])) {
      result.push(splitter[i]);
    }
  }
  return result.length > 1 ? result[0] : " -1";
}
console.log(firstRepeat("legas"));
//////////
