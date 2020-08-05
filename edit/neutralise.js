// https://edabit.com/challenge/HzxTqSHLmRC3zEfXb

function neutralise(s1, s2) {
  splitS1 = s1.split("");
  splitS2 = s2.split("");
  let result = [];

  for (let i = 0; i < splitS1.length; i++) {
    if (splitS1[i] !== splitS2[i]) {
      result.push(splitS1[i].replace(splitS1[i], "0"));
    } else {
      result.push(splitS1[i]);
    }
  }

  return result.join("");
}

console.log(neutralise("-++-", "-+-+"));
///////////////\\\\\

function matchLastItem(arr) {
  const last = arr.slice(-1);
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr.length) {
      result.push(arr[i]);
    }
  }
  return result.join("") === last.join("");
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
//////////////////

function replaceVowel(vowel) {
  vowelMap = {
    i: 3,
    a: 7,
    e: 9,
  };

  for (let i = 0; i < vowel.length; i++) {
    if (vowelMap[vowel[i]]) {
      vowel = vowel.replace(vowel[i], vowelMap[vowel[i]]);
    }
  }
  return vowel;
}

console.log(replaceVowel("this is a test"));
