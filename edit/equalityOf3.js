// https://edabit.com/challenge/PKiTjA7SLK99ZZ8GK

function equal(a, b, c) {
  const size = new Set([a, b, c]).size;
  return size === 3 ? 0 : 4 - size;
}

console.log(equal(3, 4, 3));
console.log(equal(1, 1, 1));

//

function doubleLetters(word) {
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i + 1)) {
      return true;
    }
  }
  return false;
}

console.log(doubleLetters("loop"));
console.log(doubleLetters("lopo"));
///////////

function sumTwoSmallestNums(arr) {
  let filt = arr.filter((x) => x >= 0);
  let sorted = filt.sort((a, b) => a - b);

  return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, -77]));
/////////

function afterNYears(names, n) {
  for (const key in names) {
    names[key] += Math.abs(n);
  }

  return names;
}

console.log(
  afterNYears(
    {
      Joel: 32,
      Fred: 44,
      Reginald: 65,
      Susan: 33,
      Julian: 13,
    },
    1
  )
);

function boomIntensity(n) {
  if (n < 2) {
    return "boom";
  }
  if (n % 2 === 0 && n % 5 === 0) {
    return `B${"O".repeat(n)}M!`;
  }
  if (n % 2 === 0) {
    return `B${"o".repeat(n)}m!`;
  }
  if (n % 5 === 0) {
    return `B${"O".repeat(n)}M`;
  } else {
    return `B${"o".repeat(n)}m`;
  }
}

console.log(boomIntensity(4));
console.log(boomIntensity(0));
console.log(boomIntensity(10));
//////////////

function getEquivalent(note) {
  var obj = {
    "C#": "Db",
    Db: "C#",
    "D#": "Eb",
    Eb: "D#",
    "F#": "Gb",
    Gb: "F#",
    "G#": "Ab",
    Ab: "G#",
    "A#": "Bb",
    Bb: "A#",
  };

  return obj[note];
}

console.log(getEquivalent("D#"));
