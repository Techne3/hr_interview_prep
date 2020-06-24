// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

function arrayOfMultiples(num, length) {
  let results = [];
  for (let i = 1; i < length + 1; i++) {
    if (num > 0) {
      results.push(num * i);
    }
  }
  return results;
}

console.log(arrayOfMultiples(7, 5));

//////////////////
function repeat(str, n) {
  let result = "";
  for (let letter of str) {
    result += letter.repeat(n);
  }
  return result;
  // return	str.split('').map(x => x.repeat(n)).join('')
}
console.log(repeat("hello", 2));

///////////////
function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}

console.log(
  sortDrinkByPrice([
    { name: "lemonade", price: 90 },
    { name: "lime", price: 432 },
    { name: "peach", price: 23 },
  ])
);
//////////

function rogerShots(arr) {
  let score = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Bang!" || arr[i] === "BangBang!") {
      score += 0.5;
    }
  }

  //   arr.filter(el => el === 'Bang!' || el === 'BangBang!').length * 0.5;

  return score;
}
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]));
console.log(
  rogerShots([
    "Bang!",
    "BangBangBang!",
    "Boom!",
    "Bang!",
    "BangBang!",
    "BangBang!",
  ])
);
