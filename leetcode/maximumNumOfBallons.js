function maxNumOfBalloons(text) {
  let count = 0;
  let map = {};

  for (let el of text) {
    //   map[el] ? map[el]++ : map[el] =1
    map[el] = (map[el] || 0) + 1;
  }
  console.log(map);
  //   while (
  //     map["b"] >= 1 &&
  //     map["a"] >= 1 &&
  //     map["l"] >= 2 &&
  //     map["o"] >= 2 &&
  //     map["n"] >= 1
  //   ) {
  //     count++;
  //     map["b"]--;
  //     map["a"]--;
  //     map["l"] -= 2;
  //     map["o"] -= 2;
  //     map["n"]--;
  //   }

  while (true) {
    for (const char of "balloon") {
      if (map[char] === 0) return count;
      map[char]--;
    }
    count++;
  }
}

console.log(maxNumOfBalloons("nlaebolko"));
// console.log(maxNumOfBalloons("ballonoballoon"));
