var isPerfectSquare = function (num) {
  var j = 0;
  while (j * j <= num) {
    if (j * j === num) return true;
    j++;
  }
  return false;
};
/////////////
// other solution
var isPerfectSquare = function (num) {
  if (num === 1 || num === 4) return true;
  let start = 0;
  let end = Math.floor(num / 2);

  while (start + 1 < end) {
    const mid = Math.floor((start + end) / 2);
    if (mid ** 2 === num) return true;
    mid ** 2 > num ? (end = mid) : (start = mid);
  }
  return false;
};
