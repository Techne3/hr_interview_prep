// https://edabit.com/challenge/wF7PQGqevdvv6Fu24

function afterNMonths(year, months) {
  if (year == undefined) return "year missing";
  if (months == undefined) return "month missing";
  return year + Math.floor(months / 12);
}

console.log(afterNMonths(2020, 24));
console.log(afterNMonths(2020, 36));

function firstAndLast(s) {
  return [[...s].sort().join(""), [...s].sort().reverse().join("")];
}

console.log(firstAndLast("cbadf"));
