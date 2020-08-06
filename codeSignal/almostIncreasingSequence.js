// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function almostIncreasingSequence(sequence) {
  let up = 0;

  for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i - 2]);
    console.log(sequence[i + 1]);
    console.log(sequence[i - 1]);
    if (sequence[i] < sequence[i - 1]) {
      up++;
    }
    if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
      return false;
    }
  }
  return up <= 1;
}

// console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
