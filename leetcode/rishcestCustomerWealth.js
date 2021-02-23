function richestCustomer(accounts) {
  //     let result =0
  //   for (let i = 0; i < accounts.length; i++) {
  //     for (let j = 0; j < accounts[i].length; j++) {
  //       console.log(accounts[i][j]);
  //         result += accounts[i][j]
  //     }
  //   }
  //   console.log(result);
  const result = [];
  for (const account of accounts) {
    const wealth = account.reduce((a, b) => a + b, 0);
    result.push(wealth);
  }

  return Math.max(...result);
}

console.log(
  richestCustomer([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
