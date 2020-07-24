function removeOuterParentheses(S) {
  const strArr = S.split("");
  const parentheses = [];
  let temp = [];
  let leftCounter = 0;
  let rightCounter = 0;

  while (strArr.length > 0) {
    const val = strArr.shift();

    val === "(" ? leftCounter++ : rightCounter++;
    temp.push(val);

    if (leftCounter > 0 && rightCounter > 0 && leftCounter === rightCounter) {
      leftCounter = 0;
      rightCounter = 0;

      temp.shift();
      temp.pop();
      parentheses.push(temp.join(""));
      temp = [];
    }
  }

  return parentheses.reduce((acc, curr) => acc + curr, "");
}

console.log(removeOuterParentheses("(()())(())(()(()))"));
