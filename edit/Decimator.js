// https://edabit.com/challenge/qabZCHGmuTak57C7h

function DECIMATOR(str) {
  let strArr = str.split("");
  let result = "";
  result = Math.ceil(strArr.length / 10);
  return strArr.slice(0, -result).join("");
}

console.log(DECIMATOR("1234567890"));
console.log(DECIMATOR("1234567890AB"));
console.log(DECIMATOR("123"));
/////////////

function dashed(str) {
  let strArr = str.split("");
  let matched = str.match(/[aeiou]/gi);
  for (let i = 0; i < strArr.length; i++) {
    if (matched.includes(str[i])) {
      strArr[i] = "-" + strArr[i] + "-";
    }
  }
  return strArr.join("");

  //   return str.replace(/[aeiou]/gi, '-$&-')
}

console.log(dashed("Carpe Diem"));
//////////////

function clearFog(str) {
  let final = str.replace(/[fog]/gi, "");
  return str.length === final.length ? "It's a clear day!" : final;
}
console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"));
console.log(clearFog("cat"));
