// https://edabit.com/challenge/GMh85YdL7kAutJ5YN

function mirror(arr) {
  return [...arr, ...arr.reverse().slice(1)];
}

console.log(mirror([1, 2, 3, 4, 5]));

///////////
function nthSmallest(arr, n) {
  if (n > arr.length) {
    return null;
  } else {
    return arr.sort((a, b) => a - b)[n - 1];
  }
}

console.log(nthSmallest([1, 3, 5, 7], 3));

//////////

function subReddit(link) {
  let splitLink = link.split("/r/")[1].split("/")[0];
  console.log(link.split("/r/")[1].splice(0,1));
}

console.log(subReddit("https://www.reddit.com/r/relationships/"));
console.log(subReddit("https://www.reddit.com/r/cats/"));

/////////////

function returnOnlyInteger(arr) {
  return arr.filter((x) => typeof x === "number" && Math.floor(x) == x);
}

console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16.4]));
