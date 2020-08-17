// https://edabit.com/challenge/pbK3wzLDvdwfEKgMt

function findBrokenKeys(str1, str2) {
  let broken = new Set();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      broken.add(str1[i]);
    }
  }
  return [...broken];
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));

//////////////

function insertWhitespace(s) {
  //   return s.replace(/([a-z])([A-Z])/g, "$1 $2");
  return [...s]
    .map((x) => (x == x.toUpperCase() ? x.replace(x, " " + x) : x))
    .join("");
  // .trim();
}

console.log(insertWhitespace("SheWalksToTheBeach"));
/////////////

function firstRepeat(chars) {
  let firstDup = new Set();

  for (letter of chars) {
    if (firstDup.has(letter)) {
      return letter;
    } else {
      firstDup.add(letter);
    }
  }
  return "-1";
}

console.log(firstRepeat("legolas"));
