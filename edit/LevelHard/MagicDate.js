function Magic(str) {
  let strArr = str.split(" ");
  let mult = strArr[0] * strArr[1];

  return mult <= 9 && strArr[2].endsWith(mult)
    ? true
    : mult >= 10 && Number(strArr[2].slice(-2)) === mult
    ? true
    : mult >= 100 && Number(strArr[2].slice(-3)) === mult
    ? true
    : false;
}

console.log(Magic("1 1 2011"));
console.log(Magic("70 4 2180"));
//////////////

function incrementToTop(arr) {
  let diff = 0;
  let max = Math.max(...arr);

  arr.map((x) => (diff += max - x));
  return diff;
}

console.log(incrementToTop([3, 10, 3]));
////////////
function isAutomorphic(n) {
  let square = n ** 2;
  return square.toString().endsWith(n);
}

console.log(isAutomorphic(5));
console.log(isAutomorphic(4));
/////////////////
function canAlternate(s) {
  let filt0 = [...s].filter((x) => x === "0").length;
  let filt1 = [...s].filter((x) => x === "1").length;

  return Math.abs(filt0 - filt1) <= 1;
}
console.log(canAlternate("0001111"));
console.log(canAlternate("10101010"));

////////////////
function calculateScores(str) {
  let score = [0, 0, 0];
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes("A")) {
      score[0]++;
    }
    if (strArr[i].includes("B")) {
      score[1]++;
    } else if (strArr[i].includes("C")) {
      score[2]++;
    }
  }

  return score;
}

console.log(calculateScores("ABCBACC"));
