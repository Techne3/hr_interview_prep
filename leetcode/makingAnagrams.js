function makingAnagrams(a, b) {
  let count = 0;
  let map = {};

  for (let i = 0; i < a.length; i++) {
    if (!map[a[i]]) {
      map[a[i]] = 1;
    } else {
      map[a[i]]++;
    }
  }
  console.log(map);

  for (let i = 0; i < b.length; i++) {
    if (map[b[i]]) {
      map[b[i]]--;
    } else {
      count++;
    }
  }
  console.log(map);
  console.log(count);

  for (let key in map) {
    count = count + map[key];
  }

  return count;
}

console.log(makingAnagrams("cde", "dcf"));
