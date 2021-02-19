function defrag(address) {
  let splitter = address.split(".");
  let result = [];

  splitter.forEach((x) => {
    result.push(x.concat("[.]"));
  });

  return result.join("");
}
console.log(defrag("1.1.1.1"));
////////////////////////////////////////////////////////////////

function runningSum(nums) {
  let result = [];

  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result.push(total);
  }
  return result;
}
console.log(runningSum([1, 2, 3, 4]));
//////

function xorOperation(n, start) {
  let result;
  let numsArr = [];

  for (let i = 0; i < n; i++) {
    numsArr.push(start + 2 * i);
  }

  for (let i = 0; i < numsArr.length; i++) {
    result ^= numsArr[i];
  }
  return result;
}

console.log(xorOperation(4, 3));
////////////////

function restoreString(s, indices) {
  let result = "";

  for (let i = 0; i < indices.length; i++) {
    result += s[indices.indexOf(i)];
  }

  return result;
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 1, 2, 3]));
////////////////////////////////////////////////////////////////

function kidsWithCandies(candies, extraCandies) {
  let max = Math.max(...candies);
  let result = [];

  candies.forEach((candy) => {
    candy + extraCandies >= max ? result.push(true) : result.push(false);
  });
  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
///////////////////

var shuffle = function (nums, n) {
  let result = [];
  let y = nums.slice(n, nums.length);
  let x = nums.slice(0, n);

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(x[i], y[i]);
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
//////////////////

var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let current = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      current += accounts[i][j];
    }
    if (current > maxWealth) {
      maxWealth = current;
    }
  }
  return maxWealth;
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
/////////////////////

var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance++;
    } else {
      balance--;
    }
    if (balance === 0) {
      count++;
    }
  }
  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));

//////////////////////////////

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;

  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j <= arr.length - i; j++) {
      let odd = arr.slice(j, j + i);

      sum += odd.reduce((acc, cv) => acc + cv, 0);
    }
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

var createTargetArray = function (nums, index) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    //   console.log(result.splice(index[i],0, nums[i]))
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
/////////////////

var numberOfMatches = function (n) {
  // Create variables for teams and matches
  let teams = n;
  let matches = 0;
  // While loop until teams equal 1
  while (teams !== 1) {
    if (teams % 2 === 0) {
      matches = teams / 2 + matches;
      teams = teams / 2;
    } else {
      matches = (teams - 1) / 2 + matches;
      teams = Math.ceil(teams - 1) / 2;
      //   teams = (teams - 1) / 2 +1;
    }
  }

  return matches;
};
console.log(numberOfMatches(7));
