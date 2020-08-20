// https://edabit.com/challenge/Zu4LyLXhd9e49krFP

function puzzlePieces(a1, a2) {
  let arr = [];
  if (a1.length !== a2.length) {
    return false;
  } else {
    for (i = 0; i < a1.length; i++) {
      arr.push(a1[i] + a2[i]);
    }
  }
  return [...new Set(arr)].length === 1;
}

console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]));
///////////
