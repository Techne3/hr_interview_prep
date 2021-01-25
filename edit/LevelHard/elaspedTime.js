const t0 = new Date("01/01/00").getTime();

function elapsedTime(sa, st) {
  let ms = new Date("01/01/00" + st) - new Date("01/01/00" + sa);
  let et = new Date(t0 + (ms < 0 ? ms + 3600 * 24000 : ms));
  return et.toString().substr(16, 8);
}
console.log(elapsedTime("11:00:00", "12:00:00"));
///

function possibleBonus(a, b) {
  if (b > a && a >= b - 6) {
    return true;
  }

  return false;
}

console.log(possibleBonus(5, 3));
////////

function calculateLosses(obj) {
  if (Object.entries(obj).length === 0) return "Lucky you!";
  return Object.values(obj).reduce((a, b) => a + b);
}

console.log(calculateLosses({}));
///////////

function challenge1(s) {
  return s.slice(0, 5);
}

function challenge2(s) {
  return s.slice(-5);
}

function challenge3(s) {
  return [...s.slice(0)].reverse().join("");
}

function challenge4(s) {
  return [...s.slice(-7)].filter((_, i) => !(i % 2)).join("");
}

console.log(challenge4("abcdefghijklmnopqrstuvwxyz"));
////////

function arrayOfMultiples(num, length) {
  let result = [];
  for (let i = 1; i <= length; i++) {
    result.push(i * num);
  }
  return result;
}
console.log(arrayOfMultiples(7, 5));
///

function testJackpot(result) {
  let dup = new Set(...result).size;
 return dup === 1
  
}
console.log(testJackpot(["@", "@", "@", "@"]));
