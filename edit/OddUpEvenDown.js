// https://edabit.com/challenge/MsNyn2xmTzRWjFuMT

function evenOddTransform(arr, n) {
  const result = [];
  arr.map((el) =>
    el % 2 !== 0 ? result.push(el + 2 * n) : result.push(el - 2 * n)
  );
  return result;
}

console.log(evenOddTransform([3, 4, 9], 3));
/////////////

function dnaToRna(dna) {
  return dna
    .split("")
    .map((el) =>
      el === "C"
        ? el.replace("A", "U").replace("T", "A").replace("C", "G")
        : el.replace("A", "U").replace("T", "A").replace("G", "C")
    )
    .join("");
}

console.log(dnaToRna("ATTAGCGCGATATACGCGTAC"));
console.log(dnaToRna("CGATATA"));

///////////////

function findNaN(number) {
  //   number = number.toString().split(",");
  //   for (let x of number) {
  //     if (x === "NaN") {
  //       return number.indexOf(x);
  //     }
  //   }
  //   return -1;
  return number.findIndex((a) => a.toString() === "NaN");
}

console.log(findNaN([1, 2, NaN]));
