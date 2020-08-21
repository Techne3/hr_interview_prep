// https://edabit.com/challenge/HZcpmfBg6NstB5soN

function minSwaps(s1, s2) {
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let count = 0;

  for (let i = 0; i < s1Arr.length; i++) {
    if (s1Arr[i] !== s2Arr[i]) {
      count++;
    }
  }
  return count / 2;
}
console.log(minSwaps("10011001", "01100110"));
////////////////

function sumOfSlices(arr) {
  const ret = [];
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (sum + arr[i] <= 100) {
      sum += arr[i];
    } else {
      ret.push(sum);
      sum = arr[i];
    }
  }
  ret.push(sum);
  return ret;
}

console.log(
  sumOfSlices([
    10,
    29,
    13,
    14,
    15,
    16,
    17,
    31,
    20,
    10,
    29,
    13,
    14,
    15,
    16,
    17,
    31,
    20,
    100,
  ])
);

function returnUnique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
/////////

function filterPrimes(num) {
  const isPrime = (number) => {
    if (number === 1) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  return num.filter((el) => isPrime(el));
}

console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27]));
/////////////////
function getStudentsWithNamesAndTopNotes(students) {
  return students.map((x) => {
    let max = Math.max(...x.notes, 0);
    return (x = {
      name: x.name,
      topNote: max,
    });
  });
}

console.log(getStudentsWithNamesAndTopNotes([{ name: "John", notes: [] }]));

function sevenBoom(arr) {
  let stringed = arr.toString();
  let seven = [...stringed].filter((x) => x.includes(7)).length;
  return seven ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6]));

///////////

function countLayers(rug) {
  let layers = [rug[0]];
  for (let i = 1; i < rug.length; i++) {
    if (!layers.includes(rug[i])) {
      layers.push(rug[i]);
    }
  }
  return layers.length;
}
console.log(
  countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA",
  ])
);
