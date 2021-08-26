const arr = [
  "apples",
  "oranges",
  "oranges",
  "oranges",
  "bananas",
  "bananas",
  "oranges",
];

// create a counter object on array
let counter = arr.reduce((counter, key) => {
  counter[key] = ++counter[key] || 1;
  return counter;
}, {});
console.log(counter);
// {"apples": 1, "oranges": 4, "bananas": 2}

// sort counter by values (compare position 1 entries)
// the result is an array
let sorted_counter = Object.entries(counter).sort((a, b) => a[1] - b[1]);
console.log(sorted_counter[0][0]);
// [["oranges", 4], ["bananas", 2], ["apples", 1]]

// show only keys of the sorted array
console.log(sorted_counter.map((x) => x));
// ["oranges", "bananas", "apples"]

/////////////

var arrs = ["cats", "monkey", "dog", "fish"];
let filtered = arrs.filter((a, i) => i % 2 !== 0);
console.log(filtered);
