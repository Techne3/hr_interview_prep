function constructFence(price) {
  console.log(price.replace(/[^0-9]/g, ""));
  return "H".repeat(1000000 / parseInt(price.replace(/[^0-9]/g, "")));
}
console.log(constructFence("$50,000"));

//////

function isSlidey(n) {
  let nArr = Array.from(String(n));
  return nArr
    .map((x, i, a) => Math.abs(x - nArr[i + 1]))
    .slice(0, -1)
    .every((x) => x === 1);
}

console.log(isSlidey(123454321));

function accum(str) {
  const chars = [];
  //   for (let i = 0; i < str.length; i++) {
  //     chars.push(
  //       str[i] === str[i].toUpperCase()
  //         ? str[i] + str[i].toLowerCase().repeat(i)
  //         : str[i].toUpperCase() + str[i].repeat(i)
  //     );
  //   }
  //   return chars.join("-").slice(0, -1);

  return [...str]
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
////////////

function verbify(str) {
  let first = str.split(" ");

  return first[0].slice(-2) === "ed"
    ? `${first[0]} ${first[1]}`
    : first[0].slice(-1) === "e"
    ? `${first[0]}d ${first[1]}`
    : `${first[0]}ed ${first[1]}`;
}

console.log(verbify("cheese burger"));
console.log(verbify("shredded cheese"));
console.log(verbify("bean toast"));
