var isSumEqual = function (s, t, target) {
  let ALPHA_INDEX_MAP = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  const numVal = (s) =>
    s
      .split("")
      .map((ch) => ALPHA_INDEX_MAP[ch])
      .join("");

  return +numVal(target) === +numVal(s) + +numVal(t);
};

console.log(isSumEqual("aab", "abb", "z"));
////////////////

var isSumEqual = function (firstWord, secondWord, targetWord) {
  const firstValue = toInteger(firstWord);
  const secondValue = toInteger(secondWord);
  const targetValue = toInteger(targetWord);
  return firstValue + secondValue === targetValue;
};

function toInteger(word) {
  let value = 0;
  for (let i = 0; i < word.length; i++) {
    value = value * 10 + (word.charCodeAt(i) - 97);
  }
  return value;
}
