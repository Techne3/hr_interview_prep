function sortArray(arr) {
  // let done = false;
  // while (!done) {
  //   done = true;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i - 1] > arr[i]) {
  //       done = false;
  //       let temp = arr[i - 1];
  //       arr[i - 1] = arr[i];
  //       arr[i] = temp;
  //     }
  //   }
  // }
  // return arr;

  //   let res = [];
  //   let min = 0;
  //   while (arr.length > 0) {
  //     min = Math.min(...arr);
  //     res.push(min);
  //     arr = arr.filter((x) => x !== min);
  //   }
  //   return res;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(sortArray([2, -5, 1, 4, 7, 8]));
