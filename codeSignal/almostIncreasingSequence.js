// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function almostIncreasingSequence(sequence) {
  let count = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
    }
    if (count > 1) {
      return false;
    }

    if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
      return false;
  }
  return true;
}

console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
