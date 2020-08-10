// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function alternatingSums(a) {
  //   let even = 0;
  //   let odd = 0;

  //   a.map((x, index) => {
  //     if (index % 2 === 0) {
  //       even += x;
  //     } else {
  //       odd += x;
  //     }
  //   });
  //   return [even, odd];
  let result = [0, 0];
  for (i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      result[0] += a[i];
    } else {
      result[1] += a[i];
    }
  }
  return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
