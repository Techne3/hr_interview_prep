// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function sortByHeight(a) {
  let filterArr = a.filter((x) => x !== -1).sort((a, b) => a - b);

  let sortedArr = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = filterArr[sortedArr];
      sortedArr++;
    }
  }
  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
