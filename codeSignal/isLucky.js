// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function isLucky(n) {
  let numStr = n.toString().split("");
  let first = 0;
  let second = 0;

  for (let i = 0; i < numStr.length / 2; i++) {
    first += Number(numStr[i]);
  }
  for (let i = 0; i < numStr.length; i++) {
    second += Number(numStr[i]);
  }

  return second - first === first ? true : false;
}

console.log(isLucky(1230));
