function moveZero(n) {
  let index = 0;

  for (let i = 0; i < n.length; i++) {
    const num = n[i];

    if (num !== 0) {
      n[index] = num;
      index++;
    }
  }
  for (let i = index; i < n.length; i++) {
    n[i] = 0;
  }
  return n;
}

console.log(moveZero([0, 13, 0, 3, 12]));
