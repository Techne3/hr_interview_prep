// https://edabit.com/challenge/TTu48ECaTRwZDj69x

function sumFoundIndexes(arr, n) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      total += i;
    }
  }
  return total;
}

console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3));

//////////////

// https://edabit.com/challenge/moK78CirzYbqk6g3z

function reverseAndNot(i) {
  let reverse = i.toString().split("").reverse().join("");
  return Number(reverse + i);
}

console.log(reverseAndNot(123));

function palindrome(str) {
  let splitter = str.split("").reverse().join("");
  if (splitter === str) {
    return true;
  }
  return false;
}

console.log(palindrome("racecar"));

//////////////////////////

function getOnlyEvens(nums) {
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && i % 2 === 0) {
      results.push(nums[i]);
    }
  }
  return results;
  //   return nums.filter((el, ind) => el % 2 === 0 && ind % 2 === 0);
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));

// /////////////

function yenToUsd(yen) {
  let convert = yen / 107.5;
  // toFixed() returns a string , pareFloat changes back to a number
  return parseFloat(convert.toFixed(2));
}

console.log(yenToUsd(500));
