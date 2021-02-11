function growingPlant(upSpeed, downSpeed, desireHeight) {
  let totalHeight = 0;
  let days = 0;

  while (totalHeight < desireHeight) {
    days++;
    totalHeight += upSpeed;
    if (totalHeight < desireHeight) {
      totalHeight -= downSpeed;
    }
  }
  return days;
}

console.log(growingPlant(100, 10, 910));
