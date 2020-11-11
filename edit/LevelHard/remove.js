function removeABC(str) {
  return str.match(/[abc]/gi) ? str.replace(/[abc]/gi, "") : null;
}

console.log(removeABC("This might be a bit hard"));
console.log(removeABC(""));
