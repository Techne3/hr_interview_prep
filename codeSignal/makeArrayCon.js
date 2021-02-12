function makeArrayCon(statues) {
  let max = Math.max(...statues);
  let min = Math.min(...statues);
  let allNums = [];

  for (let i = min; i <= max; i++) {
    allNums.push(i);
  }

  return allNums.filter((ele, i) => statues.indexOf(ele) === -1).length;
}
console.log(makeArrayCon([6, 2, 3, 8]));
