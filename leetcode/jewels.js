function numJewels(J, S) {
  let count = 0;
  const jewelsMap = {};

  for (const jewel of J) {
    jewelsMap[jewel] = true;
  }
  for (const stone of S) {
    if (stone in jewelsMap) {
      count++;
    }
  }

  return count;
}
console.log(numJewels("aA", "aAAbbbb"));
