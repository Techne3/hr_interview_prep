var countBalls = function (lowLimit, highLimit) {
  const count = new Array(46).fill(0);

  let max = 0;

  for (let i = lowLimit; i <= highLimit; i++) {
    const index = sumDigs(i);

    count[index]++;
    max = Math.max(max, count[index]);
  }

  return max;

  function sumDigs(num) {
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  }
};
