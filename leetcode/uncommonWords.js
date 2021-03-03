function uncommonWord(A, B) {
  A = A.split(" ");
  B = B.split(" ");
  let mapA = {};
  let mapB = {};
  let output = [];

  for (let i = 0; i < A.length; i++) {
    mapA[A[i]] = (mapA[A[i]] || 0) + 1;
  }
  for (let i = 0; i < B.length; i++) {
    mapB[B[i]] = (mapB[B[i]] || 0) + 1;
  }

  for (let key in mapA) {
    if (mapA[key] === 1 && !mapB[key]) {
      output.push(key);
    }
  }
  for (let key in mapB) {
    if (mapB[key] === 1 && !mapA[key]) {
      output.push(key);
    }
  }
  console.log(mapA);
  console.log(mapB);

  return output;
}

console.log(uncommonWord("this apple is sweet", "this apple is sour"));
