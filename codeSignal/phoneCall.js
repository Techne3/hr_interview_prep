// https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta

function phoneCall(min1, min2_10, min11, s) {
  if (s < min1) return 0;
  if (s == min1) return 1;
  if (s - min1 <= min2_10 * 9) return 1 + Math.floor((s - min1) / min2_10);
  return Math.floor((s - min1 - min2_10 * 9) / min11 + 10);
}

console.log(phoneCall(3, 1, 2, 20));

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let combined = weight1 + weight2;
  if (combined <= maxW) {
    return value1 + value2;
  } else if (weight1 <= maxW && weight2 <= maxW) {
    return value1 > value2 ? value1 : value2;
  } else if (weight1 <= maxW || weight2 <= maxW) {
    return weight1 <= maxW ? value1 : value2;
  }
  return 0;
}

console.log(knapsackLight(10, 5, 6, 4, 8));

//////////

function extraNumber(a, b, c) {
  return a === b ? c : a === c ? b : c === b ? a : a;
}

console.log(extraNumber(2, 5, 2));

//////////////

function isInfiniteProcess(a, b) {
  if (a === b) {
    return false;
  } else if (
    a < b &&
    ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0))
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(isInfiniteProcess(2, 6));

/////////////

function arithmeticExpression(a, b, c) {
  let added = a + b;
  let mult = a * b;
  let div = a / b;
  let min = a - b;
  return added === c || mult === c || div === c || min === c;
}

console.log(arithmeticExpression(2, 3, 5));

//////////////

function tennisSet(score1, score2) {
  let max = Math.max(score1, score2);
  let min = Math.min(score1, score2);

  return (max === 7 && min >= 5 && min < 7) || (max == 6 && min < 5);
}

console.log(tennisSet(5, 7));
console.log(tennisSet(3, 6));
console.log(tennisSet(8, 5));

function metroCard(lastNumberOfDays) {
  return lastNumberOfDays === 31
    ? [28, 30, 31]
    : lastNumberOfDays === [30]
    ? [31]
    : [30];
}

console.log(metroCard(31));
console.log(metroCard(28));
console.log(metroCard(30));
