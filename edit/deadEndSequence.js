function deadEnd(n) {
  let seq = [];

  while (!seq.includes(n)) {
    seq.push(n);
    const s = [...`${n}`].reduce((a, c) => a + +c, 0);
    n = n % s ? n * s : n / s;
  }
  return [seq.length, seq[seq.length - 1]];
}

console.log(deadEnd(5));
console.log(deadEnd(11));

///////////

function holeySort(arr) {
  let holeObject = {
    0: 1,
    1: 0,
    2: 0,
    3: 0,
    4: 1,
    5: 0,
    6: 1,
    7: 0,
    8: 2,
    9: 1,
  };
  const countHoles = (number) => {
    let number_holes = 0;
    let digit_array = String(number).split("");
    digit_array.forEach((digit) => {
      number_holes += holeObject[digit];
    });
    console.log(number_holes);

    return number_holes;
  };

  return arr.sort((a, b) => countHoles(a) - countHoles(b));
}

console.log(holeySort([100, 888, 1660, 11]));
