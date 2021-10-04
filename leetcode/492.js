var constructRectangle = function (area) {
  let width = Math.floor(Math.sqrt(area));

  while (width > 0) {
    const length = area / width;
    if (Number.isInteger(length)) {
      return [length, width];
    }
    width--;
  }
};
