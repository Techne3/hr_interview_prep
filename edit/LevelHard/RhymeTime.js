// https://edabit.com/challenge/p3LHPrDSwr4kYE9ov

function doesRhyme(str1, str2) {
  let res1 = str1
    .split(" ")
    .pop()
    .replace(/[^aeiou]/gi, "");
  console.log(res1);
  let res2 = str2
    .split(" ")
    .pop()
    .replace(/[^aeiou]/gi, "");
  console.log(res2);
  return res1.toUpperCase() == res2.toUpperCase();
}

console.log(doesRhyme("Sam I am!", "Green eggs and ham."));
//////////////

function messageGlitch(txt) {
  let regex = /\d+/gi;
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return txt.replace(regex, (x) => alpha[x - 1]);
}
console.log(
  messageGlitch(
    "T21e19d1y's m1r11e20i14g m5e20i14g w9l12 14o23 2e i14 20h5 3o14f5r5n3e r15o13."
  )
);

//////////////////////
function miniPeaks(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]));
/////////////

function correctSpacing(sentence) {
  return sentence.replace(/  +/g, " ").trim();
}
console.log(correctSpacing("The film   starts       at      midnight. "));
//////////////

function mysteryFunc(num) {
  let numArr = Array.from(String(num), Number);
  let mult = numArr.reduce((a, c) => (a *= c), 1);

  return mult;
}

console.log(mysteryFunc(152));
/////////////

function letterCounter(arr, letter) {
  let arrF = arr.flat();
  return arrF.filter((x) => x == letter).length;
}
console.log(
  letterCounter(
    [
      ["D", "E", "Y", "H", "A", "D"],
      ["C", "B", "Z", "Y", "J", "K"],
      ["D", "B", "C", "A", "M", "N"],
      ["F", "G", "G", "R", "S", "R"],
      ["V", "X", "H", "A", "S", "S"],
    ],
    "D"
  )
);
///////////

function asciiSort(arr) {
  let sArr1 = arr[0].split("");
  let sArr2 = arr[1].split("");

  let one = 0;
  let two = 0;

  for (let i = 0; i < sArr1.length; i++) {
    one += sArr1[i].charCodeAt();
  }
  for (let i = 0; i < sArr2.length; i++) {
    two += sArr2[i].charCodeAt();
  }
  return one < two ? arr[0] : arr[1];
}
console.log(asciiSort(["hey", "man"]));
//////////////

function charAtPos(r, s) {
  let result = [];
  for (let i = 0; i < r.length; i++) {
    if ((i % 2 == 0 && s === "odd") || (i % 2 !== 0 && s === "even")) {
      result.push(r[i]);
    }
  }
  return Array.isArray(r) ? result : result.join("");
}

console.log(charAtPos([1, 2, 3, 4, 5], "odd"));
