// https://edabit.com/challenge/XcfmvhpRp4t3tQWG2

function uniqueStyles(albums) {
  return new Set(albums.flatMap((x) => x.split(","))).size;
}

console.log(
  uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul",
  ])
);
////////////
function charAppears(sentence, char) {
  let seq = [];
  sentence = sentence.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    let count = 0;
    for (let j = 0; j < sentence[i].length; j++) {
      console.log(sentence[i].charAt(j));
      if (sentence[i].charAt(j) === char.toLowerCase()) {
        count++;
      }
    }
    seq.push(count);
  }
  return seq;
}

console.log(charAppears("She sells sea shells by the seashore.", "s"));
