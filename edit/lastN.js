// https://edabit.com/challenge/S6zpG8RwDrxaFEQLE

function last(a, n) {
  if (n > a.length) {
    return "invalid";
  } else if (n === 0) {
    return [];
  } else {
    return a.slice(-n);
  }
}

console.log(last([1, 2, 3, 4, 5, 10], 2));

//////////
function isEqual(num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return false;
  } else {
    return num1 === num2 ? true : false;
  }
}

console.log(isEqual("1", 1));
console.log(isEqual("1", "1"));
console.log(isEqual(1, 1));

function existsHigher(arr, n) {
  let max = Math.max(...arr);
  return n > max ? false : true;
}

console.log(existsHigher([1, 2, 4], 6));
console.log(existsHigher([1, 2, 3, 4, 5, 10], 8));
