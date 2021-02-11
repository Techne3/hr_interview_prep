function differentSymbolNative(s) {
  s = s.split("");

  let letterArray = [];

  s.forEach((elm) => {
    if (!letterArray.includes(elm)) {
      letterArray.push(elm);
    }
  });

  return letterArray.length;
}

console.log(differentSymbolNative("cabca"));
