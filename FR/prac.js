function diamond(stars) {
  var width = 5;
  var num = (width + 1) / 2;
  for (let i = num - 1; i > -num; i--) {
    for (let j = num - Math.abs(i); j < num; j++) {
      stars += " ";
    }
    for (let j = 0; j < 2 * (num - Math.abs(i)) - 1; j++) {
      stars += "*";
    }
    stars += "\n";
  }
  return stars;
}

console.log(diamond(5));
