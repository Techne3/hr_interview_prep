function additionWithoutCarrying(n1, n2) {
  var result = 0,
    x = 1;
  while (n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    x *= 10;
  }
  return result;
}

console.log(additionWithoutCarrying(456, 1734));

function commonCharCount(s1, s2) {
  // split up strings into arr
  s1 = s1.split("");
  s2 = s2.split("");

  let s1Obj = {};
  let s2Obj = {};

  for (let i = 0; i < s1.length; i++) {
    if (s1Obj.hasOwnProperty(s1[i])) {
      s1Obj[s1[i]]++;
    } else {
      s1Obj[s1[i]] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s2Obj.hasOwnProperty(s2[i])) {
      s2Obj[s2[i]]++;
    } else {
      s2Obj[s2[i]] = 1;
    }
  }
  console.log(s1Obj);
  console.log(s2Obj);

  let total = 0;

  for (let prop in s1Obj) {
    if (s2Obj.hasOwnProperty(prop)) {
      if (s2Obj[prop] < s1Obj[prop]) {
        total += s2Obj[prop];
      } else {
        total += s1Obj[prop];
      }
    }
  }

  return total;
}
console.log(commonCharCount("aabcc", "adcaa"));
