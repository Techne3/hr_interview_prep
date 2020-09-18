function flattenCurve(arr) {
  if (!arr.length) {
    return [];
  }
  const mean = (arr.reduce((a, b) => a + b) / arr.length).toFixed(1);
  return arr.map((i) => +mean);
}
console.log(flattenCurve([1, 2, 3, 4, 5]));
//////////////

function splitCode(item) {
  let matched = item.match(/[A-Z]/gi).join("");
  let last = item.slice(matched.length);

  return [matched, +last];
}

console.log(splitCode("TEWA8392"));

///////////////

function split(str) {
  //   let vowels = "aeiouAEIOU".split("");
  //   let vowel = "";
  //   let consonants = "";
  //   [...str].map((x) => (vowels.includes(x) ? (vowel += x) : (consonants += x)));
  //   return `${vowel}${consonants}`;

  const vowel = str.match(/[aeiou]/gi).join("");
  const con = str.match(/[^aeiou]/gi).join("");

  return `${vowel}${con}`;
}

console.log(split("abcde"));
//////////////////

function upwardTrend(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i + 1]);
    if (typeof arr[i] === "string") return "Strings not permitted!";
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

console.log(upwardTrend([6, 9, 11, 15, 12]));
/////////////

// function stmid(str) {
//   const word = str.split(" ");
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     word[i].length % 2 === 0
//       ? (result += word[i].charAt(0))
//       : (result += word[i].charAt(word[i].length / 2));
//   }

//   return result;
// }

const stmid = (str) =>
  str
    .split(" ")
    .map((w) => (w.length % 2 !== 0 ? w[Math.floor(w.length / 2)] : w[0]))
    .join("");

console.log(stmid("Alexa have to paid"));
