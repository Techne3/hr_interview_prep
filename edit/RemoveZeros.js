// https://edabit.com/challenge/3jzycf6fcgwZbvpcf
function removeLeadingTrailing(n) {
  return Math.abs(n);
}

console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00036"));

/////////////////

function countCharacters(arr) {
  let splitArr = arr.toString().split(",");
  return splitArr.join("").length;

  //  return arr.flat().join('').length;
}

console.log(countCharacters(["22222222", "22222222"]));

//////////////

function detectWord(str) {
  // let strArr = str.split('')
  // let finalArr =[]

  // for(let i =0; i < strArr.length; i++){
  //     if(strArr[i] === strArr[i].toLowerCase()){
  //         finalArr.push(strArr[i])
  //     }
  // }
  // return finalArr.join('')

  return [...str].filter((el) => el === el.toLowerCase()).join("");
}

console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));

/////////////////

function findBob(names) {
  //   for (let i = 0; i < names.length; i++) {
  //     if (names[i] === "Bob") {
  //       return i;
  //     }
  //   }
  //   return -1;
  return names.indexOf("Bob");
}

console.log(findBob(["Jimmy", "Layla", "Bob"]));
