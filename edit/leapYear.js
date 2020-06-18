// https://edabit.com/challenge/ALmkPHd7eoe5btx9y

function isLeap(year) {
  if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0 && year % 100 !== 0 ? true : false;
  }
}

console.log(isLeap(2020));
console.log(isLeap(2000));
