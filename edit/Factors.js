// https://edabit.com/challenge/k5k3aXWp7aibft74n

function checkFactors(factors, num) {
  return factors.every((x) => num % x === 0);
}

console.log(checkFactors([2, 3, 4], 12));
console.log(checkFactors([40, 50, 55], 10));

function filterStateNames(arr, type) {
  if (type == "abb") {
    return arr.filter((word) => word.length <= 2);
  } else if (type == "full") {
    return arr.filter((word) => word.length > 2);
  }
}

console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));

function oddProduct(arr) {
  let odd = arr.filter((x) => x % 2 !== 0);
  return odd.reduce((a, b) => a * b);
}

console.log(oddProduct([3, 4, 1, 1, 5]));

function correctStream(user, correct) {
  let results = [];
  for (let i in user) {
    results.push(user[i] === correct[i] ? 1 : -1);
  }
  return results;
}

console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]));
