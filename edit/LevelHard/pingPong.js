function pingPong(arr, win) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push("Ping!");
    newArr.push("Pong!");
  }
  if (!win) {
    newArr.pop();
  }
  return newArr;
}
console.log(pingPong(["Ping!", "Ping!"], false));
