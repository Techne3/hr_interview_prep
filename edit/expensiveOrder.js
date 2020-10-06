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
