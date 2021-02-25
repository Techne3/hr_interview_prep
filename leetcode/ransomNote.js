function ransomNote(magazine, note) {
  let ransom = true;

  let map = {};

  for (let word of magazine) {
    map[word] = (map[word] || 0) + 1;
  }
  for (let word of note) {
    map[word] = (map[word] || 0) - 1;
  }
  console.log(map);

  for (let key in map) {
    if (map[key] < 0) {
      ransom = false;
      break;
    }
  }

  return ransom ? true : false;
}

console.log(
  ransomNote(
    ["give", "me", "one", "grand", "today", "night"],
    ["give", "one", "grand", "today"]
  )
);
