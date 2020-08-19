// https://edabit.com/challenge/iqZkzkWTHrJCFf6ZQ

function halveCount(a, b) {
  let count = 0;
  while (a >= b) {
    a = a / 2;
    count++;
  }
  return count - 1;
}

console.log(halveCount(1324, 98));
console.log(halveCount(624, 8));
///////////////

function changeTypes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean") {
      arr[i] = !arr[i];
    }
    if (typeof arr[i] === "string") {
      arr[i] = `${arr[i].slice(0, 1).toUpperCase()}${arr[i].slice(1)}!`;
    }
    if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
      arr[i] = arr[i] + 1;
    }
  }
  return arr;
}
console.log(changeTypes(["cat", 12, true]));
console.log(changeTypes([false, "false", "true"]));
/////////////////

function freeShipping(order) {
  let total = Object.values(order);
  let added = total.reduce((a, c) => a + c);

  return added >= 50;
}

console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
//////

function longestZero(s) {
  let sArr = s.split("1").sort();
  //   console.log(sArr[sArr.length - 1]);
  let result = "";
  for (i of sArr) {
    if (i.length > result.length) {
      result = i;
    }
  }
  return result;
}
console.log(longestZero("01100001011000"));
