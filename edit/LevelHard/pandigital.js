function isPandigital(num) {
  let numArr = Array.from(String(num), Number);
  let filt = new Set(numArr);
  let newArr = Array.from(filt);
  let sorted = newArr.sort((a, b) => a - b);

  return sorted.join("") === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].join("");
}

console.log(isPandigital(84847473937));
