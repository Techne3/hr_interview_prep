var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  const first = s1.split(""),
    second = s2.split("");
  let diffCount = 0,
    firstDiff = "",
    secondDiff = "";
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) continue;
    if (first[i] !== second[i]) {
      if (firstDiff) secondDiff = second[i] + first[i];
      else firstDiff = first[i] + second[i];
      diffCount++;
    }
  }
  return diffCount < 3 && firstDiff === secondDiff;
};
