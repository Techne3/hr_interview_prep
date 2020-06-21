// https://edabit.com/challenge/9GcCezhbB3DxoJ6fL

function isInOrder(str) {
  let order = str.split("").sort().join("");
  return order === str ? true : false;
}

console.log(isInOrder("bca"));
console.log(isInOrder("321"));
console.log(isInOrder("123"));

function hammingDistance(str1, str2) {
  //     let result = 0
  // 	for(let i = 0; i < str1.length; i++){
  //         if(str1[i] !== str2[i]){
  //             result++
  //         }
  //     }
  //     return result
  // }

  /// other solution
  return str1.split("").filter((x, i) => str1[i] !== str2[i]).length;
}
console.log(hammingDistance("abcde", "bcdef"));

function isIdentical(s) {
  return s.split("").every((el) => el === s[0]);
}

console.log(isIdentical("ckfkk"));
console.log(isIdentical("ccccc"));
