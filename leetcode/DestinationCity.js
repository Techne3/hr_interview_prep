function destCity(paths) {
  let starts = paths.map((path) => path[0]);
  let ends = paths.map((path) => path[1]);
  for (let end of ends) {
    if (starts.indexOf(end) === -1) return end;
  }
  return "";
}

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);
