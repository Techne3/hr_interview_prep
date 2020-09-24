function constructFence(price) {
  console.log(price.replace(/[^0-9]/g, ""));
  return "H".repeat(1000000 / parseInt(price.replace(/[^0-9]/g, "")));
}
console.log(constructFence("$50,000"));
