// https://edabit.com/challenge/EMuszDzF66k9J73HG

function jazzify(arr) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].endsWith("7")) {
      final.push(`${arr[i]}7`);
    } else {
      final.push(arr[i]);
    }
  }

  return final;

  //  return arr.map(item=> item.endsWith("7") ? item : item+7)
}

console.log(jazzify(["Dm", "G", "E", "A7"]));
//////////////////////

function specialReverse(s, c) {
  //   let sArr = s.split("");

  // return s.split('').map(el => {
  //     return el.startsWith(c) ? [...el].reverse().join('') : el
  // }).join('')

  let sArr = s.split(" ");
  return sArr
    .map((el) => {
      return el.startsWith(c) ? [...el].reverse().join("") : el;
    })
    .join(" ");
}

console.log(specialReverse("word searches are super fun", "s"));

////////////////

function mean(num) {
  let numArr = Array.from(String(num), Number);
  return numArr.reduce((a, b) => a + b, 0) / numArr.length;
}

console.log(mean(12345));

////////////

function keysAndValues(obj) {
  //   let key = Object.keys(obj);
  //   let values = Object.values(obj);
  //   let final = [];

  //   final.push(key, values);
  //   return final;

  let response = [[], []];
  for (let key in obj) {
    response[0].push(key);
    response[1].push(obj[key]);
  }
  return response;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
//////////////////

function toArray(obj) {
  return Object.entries(obj);
}

console.log(toArray({ a: 1, b: 2 }));
