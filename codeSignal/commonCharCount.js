// https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

function commonCharacterCount(s1, s2) {
  let s2Arr = s2.split("");
  let result = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s2Arr.indexOf(s1[i]) !== -1) {
      s2Arr.splice(s2Arr.indexOf(s1[i]), 1);
      result++;
    }
  }

  return result;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
