var replaceElements = function (arr) {
  if (arr.length === 1) return [-1];

  const len = arr.length;

  let currentMax = -1;

  for (let i = len - 1; i >= 0; i--) {
    const currentValue = arr[i];
    arr[i] = currentMax;
    currentMax = Math.max(currentMax, currentValue);
  }

  return arr;
};

const replaceEle = (arr) => {
  const result = new Array(arr.length);
  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    console.log(result[i]);
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};

console.log(replaceEle([17, 18, 5, 4, 6, 1]));
