// https://edabit.com/challenge/RhvdtEWHAMAqkdugn

function validatePIN(pin) {
  pin = pin.match(/[0-9]/g);
  if (!pin) {
    return false;
  }
  return pin.length == 4 || pin.length == 6 ? true : false;
}

console.log(validatePIN("1234"));
console.log(validatePIN("a234"));
/////////////

function isFirstSuperior(arr1, arr2) {
  let total1 = arr1.reduce((a, b) => a + b);
  let total2 = arr2.reduce((a, b) => a + b);
  return total1 > total2 ? true : false;
}

console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));

///////////

function fizzBuzz(number) {
  let store = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      store.push("FizzBuzz");
    } else if (i % 3 === 0) {
      store.push("Fizz");
    } else if (i % 5 === 0) {
      store.push("Buzz");
    } else {
      store.push(i);
    }
  }
  return store;
}
console.log(fizzBuzz(10));
