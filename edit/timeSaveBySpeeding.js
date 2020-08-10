// https://edabit.com/challenge/fkzJMioMcnP4p4BFG

function timeSaved(lim, avg, d) {
  let result = (d / lim - d / avg) * 60;
  return Number(result.toFixed(1));
}

console.log(timeSaved(80, 90, 40));

function isAnagram(s1, s2) {
  let split1 = s1.toLowerCase().split("").sort().join("");
  let split2 = s2.toLowerCase().split("").sort().join("");

  return split1 === split2;
}
console.log(isAnagram("Dave Barry", "Ray Adverb"));
