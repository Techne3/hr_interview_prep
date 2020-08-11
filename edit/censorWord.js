// https://edabit.com/challenge/huiJkoQzegoc5qeCJ

function censor(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4) {
      strArr[i] = strArr[i].replace(strArr[i], "*").repeat(strArr[i].length);
    }
  }
  return strArr.join(" ");
}
console.log(censor("The code is fourty"));

///////////

function alphNum(str) {
  const map = {
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
  let s = str.toLowerCase().split("");

  for (let i = 0; i < s.length; i++) {
    s[i] = map[s[i]];
  }
  return s.join(" ");

  //   return [...str].map((value) => value.charCodeAt() - 65).join(" ");
}

console.log(alphNum("javascript"));
