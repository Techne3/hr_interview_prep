function leftRotate(a, d) {
  let rotated = [];
  for (let i = d; i < a.length; i++) {
    rotated.push(a[i]);
  }

  for (let i = 0; i < d; i++) {
    rotated.push(a[i]);
  }
  return rotated;
}
console.log(leftRotate([1, 2, 3, 4, 5], 2));
