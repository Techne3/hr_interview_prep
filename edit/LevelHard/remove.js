function removeABC(str) {
  return str.match(/[abc]/gi) ? str.replace(/[abc]/gi, "") : null;
}

console.log(removeABC("This might be a bit hard"));
console.log(removeABC(""));

function calculateLosses(obj) {
  let val = Object.values(obj);
  let added = val.reduce((a, c) => c + a, 0);

  return !added ? "Lucky you" : added;
}

console.log(
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
);

function missingNum(num) {
  const max = Math.max(...num); // Will find highest number
  const min = Math.min(...num); // Will find lowest number
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!num.includes(i)) {
      // Checking whether i(current value) present in num(argument)
      missing.push(i); // Adding numbers which are not in num(argument) array
    }
  }
  return missing;
}
console.log(missingNum([15, 17, 18, 20]));

function numbersSum(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === "number") {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result.reduce((a, c) => a + c, 0);

  return arr.filter((x) => typeof x === "number").reduce((a, c) => a + c, 0);
}

console.log(numbersSum([1, 2, "13", "4", "645"]));

function timeToFinish(full, part) {
  let fullTogether = full.split(" ").join("").length;
  let partTogether = part.split(" ").join("").length;
  let diff = fullTogether - partTogether;
  return diff * 0.5;
}
console.log(
  timeToFinish(
    "And so brings my conclusion to its conclusion.",
    "And so brings my conclusion to"
  )
);

function inclusiveArray(startNum, endNum) {
  let result = [];
  if (startNum > endNum) return startNum;
  for (let i = startNum; i <= endNum; i++) {
    result.push(i);
  }
  return result;
}

console.log(inclusiveArray(11, 5));

////

function checkSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}
console.log(checkSum([10, 15, 3, 7], 17));
///////////

function count(n) {
  let numArr = Array.from(String(n));
  let filtNum = numArr.filter((x) => x !== "-");
  return filtNum.length;
}
console.log(count(-314890));
