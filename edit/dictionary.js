// https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb

function dictionary(initial, words) {
  return words.filter((x, i) => x.startsWith(initial));
}

console.log(dictionary("bu", ["button", "breakfast", "border"]));

/// https://edabit.com/challenge/BEHiM4RTmhcLX7Cq6
function repeat(item, times) {
  let arr = [];
  for (let i = 0; i < times; i++) {
    arr.push(item);
  }
  return arr;
}

console.log(repeat("tester", 3));

// https://edabit.com/challenge/W8z2EghwmjQYhwM2D

function getFillings(sandwich) {
  return sandwich.slice(1, -1);
}

console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));

function concat(...args) {
  return [].concat(...args);
}

console.log(concat([1, 2], [3, 4], [6, 4]));

function middleEarth(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "Frodo" && arr[i + 1] === "Sam") ||
      (arr[i] === "Sam" && arr[i + 1] === "Frodo")
    ) {
      return true;
    }
  }
  return false;
}

console.log(middleEarth(["Frodo", "Sam", "Gandalf"]));
console.log(middleEarth(["Frodo", "Gandalf", "Sam", "Frodo"]));
