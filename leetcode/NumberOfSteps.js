var numberOfSteps = function (num) {
  let step = 0;

  while (num > 0) {
    if (num % 2 == 0) {
      num = num / 2;
      step++;
    } else {
      num = num - 1;
      step++;
    }
  }
  return step;
};

console.log(numberOfSteps(14));
