function totalDistance(height, length, tower) {
  return Math.round(((tower / height) * length + tower) * 10) / 10;
}

console.log(totalDistance(0.2, 0.4, 100.0));

function warOfNumbers(arr) {
  let odds = [];
  let evens = [];

  arr.forEach((el) => {
    el % 2 !== 0 ? odds.push(el) : evens.push(el);
  });

  let totalOdds = odds.reduce((acc, b) => acc + b);
  let totalEvens = evens.reduce((acc, b) => acc + b);

  return totalOdds > totalEvens
    ? totalOdds - totalEvens
    : totalEvens - totalOdds;
}
console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));

///////////

function getDay(day) {
  const formatDate = new Date(day);
  const dayOfWeek = formatDate.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[dayOfWeek];
}

console.log(getDay("12/11/2016"));
/////////////

function timeForMilkAndCookies(date) {
  let month = date.getMonth();
  let day = date.getDate();

  return month === 11 && day === 24 ? true : false;
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));
/////////

function getTotalPrice(groceries) {
  let result = [];
  groceries.map((x) => {
    let totaled = x.price * x.quantity;
    result.push(totaled);
  });

  let answer = result.reduce((acc, b) => acc + b, 0).toFixed(1);
  return parseFloat(answer);
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.523 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);

/////////
function isPalindrome(wrd) {
  let chars = wrd.split("");
  let map = {};
  let odds = 0;

  for (let i = 0; i < chars.length; i++) {
    if (map.hasOwnProperty(chars[i])) {
      map[chars[i]]++;
    } else {
      map[chars[i]] = 1;
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (map[chars[i]] % 2 !== 0) {
      odds++;
    }
  }

  return odds <= 1;
}

console.log(isPalindrome("adieu"));
console.log(isPalindrome("aabbcc"));

function isPal(word) {
  const len = word.length;

  if (len < 2) return true;

  if (word[0] === word[len - 1]) {
    return isPal(word.slice(1, len - 1));
  }
  return false;
}
console.log(isPal("aba"));
