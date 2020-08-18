// https://edabit.com/challenge/fbTF9EksvFpq3wZaX

function getPrices(arr) {
  let result = [];
  arr.map((x) => {
    let reformat = x.split("(")[1];
    console.log(reformat);
    let formatted = Number(reformat.slice(1, reformat.length - 1));
    result.push(formatted);
  });
  return result;
}

console.log(
  getPrices([
    "ice cream ($5.99)",
    "banana ($0.20)",
    "sandwich ($8.50)",
    "soup ($1.99)",
  ])
);

//////////////

function getStudentsWithNamesAndTopNotes(students) {
  return students.map((x) => {
    return (x = {
      name: x.name,
      topNotes: Math.max(...x.notes, 0),
    });
  });
}

console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [] },
    { name: "tom", notes: [3, 5, 4] },
  ])
);
///////////////

function powerRanger(power, min, max) {
  let result = [];
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (Number.isInteger(Math.pow(i, 1 / power))) {
      result.push(i);
      count++;
    }
  }
  return result;
}

console.log(powerRanger(2, 49, 65));
/////////////

function primesBelowNum(n) {
  let prime = [2, 3];
  for (let i = 2; i <= n; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      prime.push(i);
    }
  }
  return prime;
}
console.log(primesBelowNum(5));
