var isPowerOfFour = function (num) {
  let multiplier = 1;

  while (multiplier < num) {
    multiplier *= 4;
  }

  return multiplier == num;
};
