// https://edabit.com/challenge/tkFfKQJzcuaDysDyY

function capitalLetters(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      counter++;
    }
  }
  return counter;
}
console.log(capitalLetters("hvbHKuFxMORMuBYRsgNF"));

//////////

function getExtension(arr) {
  return arr.map((x) => x.split(".")[1]);
  // return arr.map(x => x.split(".").pop())
}

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));

///////////

function googlify(n) {
  if (n <= 1) {
    return "invalid";
  } else {
    return `G${"o".repeat(n)}gle`;
    // return 'G' + 'o'.repeat(n) + 'gle';
  }
}

console.log(googlify(8));

////// recursion reverse string

function reverse(str) {
  return str === "" ? "" : reverse(str.substr(1)) + str[0];
  //  return str === '' ? '' : reverse(str.substr(1)) + str.charAt(0)
}

console.log(reverse("hello"));
