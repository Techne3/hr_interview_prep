function diamond(num) {
  var stars = "";
  var num = (num + 1) / 2;
  for (let i = num; i > -num; i--) {
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
