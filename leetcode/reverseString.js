function reverseString(s) {
  //   let word = s.split(" ");
  //   let reverseWord = word.map((el) => el.split("").reverse().join(""));

  //   return reverseWord.join(" ");

  return s
    .split(" ")
    .reduce((reversed, curr) => {
      reversed.push(curr.split("").reverse().join(""));
      return reversed;
    }, [])
    .join(" ");
}
console.log(reverseString("Let's take LeetCode contest"));
///////////////
