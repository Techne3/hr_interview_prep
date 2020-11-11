function expensiveOrders(orders, cost) {
  //   let filt = Object.entries(orders).filter((x) => x[1] > cost);
  //   return Object.fromEntries(filt);

  let result = {};
  for (let i in orders) {
    if (orders[i] > cost) {
      result[i] = orders[i];
    }
  }
  return result;
}

console.log(expensiveOrders({ a: 3000, b: 200, c: 1050 }, 1000));
//////////////////

function numberLenSort(arr) {
  return arr.sort((a, b) => a.toString().length - b.toString().length);
}

console.log(numberLenSort([999, 421, 22, 990, 32]));
////////

function turnCalc(num) {
  let map = {
    1: "I",
    2: "Z",
    3: "E",
    4: "H",
    5: "S",
    6: "G",
    8: "B",
    9: "-",
    0: "O",
    7: "L",
  };

  let numArr = [...`${num}`];

  return numArr
    .map((x) => map[x])
    .reverse()
    .join("");
}
console.log(turnCalc(3045));
