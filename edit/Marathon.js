// https://edabit.com/challenge/DvwY43tNMdEpW4kKu

function marathonDistance(d) {
  let count = 0;
  d.map((el) => (count += Math.abs(el)));
  return count === 25;

  //   return d.reduce((a, b) => Math.abs(a) + b);
}

console.log(marathonDistance([1, 9, 5, 8, 2]));
console.log(marathonDistance([-10, 9, 5, 8, 2]));

function counterpartCharCode(char) {
  return char === char.toUpperCase()
    ? char.toLowerCase().charCodeAt()
    : char.toUpperCase().charCodeAt();
}

console.log(counterpartCharCode("a"));
console.log(counterpartCharCode("A"));

/////////////////

function transformUpvotes(str) {
  //   let result = [];
  //   let spliter = str.split("");
  //   for (let i = 0; i < spliter.length; i++) {
  //     if (str) {
  //       result.push(str[i].replace(".", "").replace("k", "00"));
  //     }
  //   }
  //   return result.join("");

  return str
    .split("")
    .map((el) => el.replace(".", "").replace("k", "00"))
    .join("");
}

console.log(transformUpvotes("6.8k 13.5k"));
///////////////

function missingNum(arr) {
  let accum = arr.reduce((a, b) => a + b);
  return 55 - accum;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
