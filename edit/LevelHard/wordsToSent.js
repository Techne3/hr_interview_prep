// https://edabit.com/challenge/ddXhrbFi4ozxxgYdG

function wordsToSentence(words) {
  if (!words || words.length === 0) return "";
  if (words.length === 1) return words[0];

  let w = words.filter((x) => x.length > 0);
  let lastWord = w.pop();
  return w.join(", ") + " and " + lastWord;
}

console.log(wordsToSentence(["Hello", "Bye", "See you soon"]));
console.log(wordsToSentence(["Hello", "", "See you soon"]));
console.log(wordsToSentence(["Hello"]));
console.log(wordsToSentence(null));
