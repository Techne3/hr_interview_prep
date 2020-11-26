function missingLetter(str) {
  //   for (var i = 0; i < str.length - 1; i++) {
  //     if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
  //       return String.fromCharCode(str.charCodeAt(i) + 1);
  //     }
  //   }
  //   return "No Missing Letter";
  let s = str.split("").map((v) => v.charCodeAt(0));
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] > s[i - 1] + 1) {
      console.log(String.fromCharCode(s[i] - 1));
    }
  }
}

console.log(missingLetter("abdefg"));
///////////

function calculateScore(games) {
  let map = {
    R: "S",
    P: "R",
    S: "P",
  };
  let Abigail = 0;
  let Benson = 0;
  games.forEach((g) => {
    console.log(map[g[0]]);
    // if(map[g[0]] === g[1]){
    // 	Abigail++;
    // }else if(map[g[1]] === g[0]){
    // 	Benson++;
    // }
  });
}

console.log(
  calculateScore([
    ["R", "P"],
    ["R", "S"],
    ["S", "P"],
  ])
);
//////////

function reverseCharacters(message) {
  let leftIndex = 0;
  let rightIndex = message.length - 1;

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {
    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return message.join("");
}

console.log(
  reverseCharacters([
    "c",
    "a",
    "k",
    "e",
    " ",
    "p",
    "o",
    "u",
    "n",
    "d",
    " ",
    "s",
    "t",
    "e",
    "a",
    "l",
  ])
);
