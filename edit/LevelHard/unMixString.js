function unmix(str) {
  let arr = [...str];
  let result = [];
  for (let i = 0; i < str.length - 1; i += 2) {
    result.push(arr[i + 1], arr[i]);
    //   [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return result;
}

console.log(unmix("123456"));

function isCorrectAliases(names, aliases) {
  console.log(names.map((x) => x.split(" ")[0][0]));

  return aliases.every(
    (item, index) =>
      item.split(" ")[0][0].toUpperCase() === names[index][0].toUpperCase() &&
      item.split(" ")[1][0].toUpperCase() === names[index][0].toUpperCase()
  );
}

console.log(
  isCorrectAliases(
    ["Adrian M.", "Harriet S.", "Mandy T."],
    ["Amazing Artichoke", "Hopeful Hedgehog", "Marvelous Mouse"]
  )
);
