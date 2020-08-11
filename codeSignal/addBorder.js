// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN
function addBorder(picture) {
  let lengthOfWall = picture[0].length + 2;
  let walls = "";

  for (let i = 0; i < lengthOfWall; i++) {
    walls = walls.concat("*");
  }
  picture.unshift(walls);
  picture.push(walls);
  for (let j = 1; j < picture.length - 1; j++) {
    picture[j] = "*".concat(picture[j], "*");
  }
  return picture;
}

console.log(addBorder(["abc", "ded"]));
