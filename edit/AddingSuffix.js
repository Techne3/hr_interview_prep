// https://edabit.com/challenge/Ra85gzkCTtXrNyCag

function add_suffix(suffix) {
  return function (str) {
    return str + suffix;
  };
}

console.log(add_suffix("hopeless"));

////////////////
function replaceVowel(word) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return [...word].map((i) => (i in vowels ? vowels[i] : i)).join("");
}

console.log(replaceVowel("karachi"));

/////////////

function oddeven(arr) {
  let odd = arr.filter((el) => el % 2 !== 0).length;
  let even = arr.filter((el) => el % 2 === 0).length;

  return odd > even ? true : false;
}

console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(oddeven([1, 2, 3, 4, 5, 6, 8]));
