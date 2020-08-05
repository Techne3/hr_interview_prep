// https://edabit.com/challenge/32mN4NsXypmqtuYkA

function maskify(str) {
  //   return str.slice(-4).padStart(str.length, "#");
  return "#".repeat(str.length - 4) + str.slice(-4);
}

console.log(maskify("4556364607935616"));
///////////

function isTrue(relation) {
  if (relation.split("").includes("=")) {
    relation = relation.replace("=", "===");
  }
  return eval(relation);
}
console.log(isTrue("8 = 7"));
////////////

function reverseArr(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((x) => +x);
}

console.log(reverseArr(1234));
/////////

function isIsogram(str) {
  var sorted = str.toLowerCase().split("").sort();

  for (i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] == sorted[i + 1]) {
      return false;
    }
  }
  return true;

  //   return str.length === new Set(str.toLowerCase()).size;
}

// console.log(isIsogram("That"));
console.log(isIsogram("That"));
