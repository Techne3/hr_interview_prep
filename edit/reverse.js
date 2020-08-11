// https://edabit.com/challenge/wPNzJEJebN2mewcqY

function reverse(str) {
  let splitter = str.split(" ");
  let reversedStr = (str) => str.split("").reverse().join("");

  for (let i = 0; i < splitter.length; i++) {
    if (splitter[i].length >= 5) {
      splitter[i] = reversedStr(splitter[i]);
    }
  }
  return splitter.join(" ");
}

console.log(reverse("This is a typical sentence."));
//////////

function tuckIn(arr1, arr2) {
  let first = arr1.slice(0, arr1.length / 2);
  let last = arr1.slice(arr1.length / 2);

  let total = first + "," + arr2 + "," + last;
  return total.split(",").map((x) => +x);
  // let total = `${first},${arr2},${last}`;
  // return total.split(",").map((x) => +x);
}

console.log(tuckIn([1, 11, 14, 15, 12, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

function filterUnique(arr) {
  return arr.filter((x) => new Set(x).size === x.length);
}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));
