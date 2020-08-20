function sumMissingNumbers(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let result = 0;
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      result += i;
    }
  }
  //   let totalArr = arr.reduce((a, c) => a + c);
  //   let totalMiss = result.reduce((a, c) => a + c);

  return result;
}

console.log(sumMissingNumbers([1, 3, 5, 7, 10]));

function uniqueAbbrev(abbs, words) {
  return abbs.every((x) => words.filter((a) => a.startsWith(x)).length <= 1);
}
console.log(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]));

////////////

function fretFreq(gStr, fret) {
  let map = {
    1: 329.63,
    2: 246.94,
    3: 196.0,
    4: 146.83,
    5: 110.0,
    6: 82.41,
  };
  let total = map[gStr] * 2 ** (fret / 12);
  return Number(total.toFixed(2));
}
console.log(fretFreq(5, 12));
