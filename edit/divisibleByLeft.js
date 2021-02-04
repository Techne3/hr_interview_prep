function divisibleByLeft(n) {
  //  const charNum = n.toString().split('')

  //     let result = []

  //     for(let i =0; i < charNum.length; i++){
  //         if( charNum[i] % charNum[i-1] === 0){
  //             result.push(true)
  //         }else{
  //           result.push(false)
  //         }
  //     }
  //     return result

  n = [...`${n}`];
  return n.map((num, i) => num % n[i - 1] < 1);
}

console.log(divisibleByLeft(2026));

////////////

function likeOrDislike(arr) {
  let current = "Nothing";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === current) current = "Nothing";
    else current = arr[i];
  }
  return current;
}
console.log(likeOrDislike(["Like", "Dislike", "Dislike"]));
// console.log(likeOrDislike(["Like", "Dislike"]));

////////

function getNumberOfApples(n, p) {
  let percent = parseInt(p);

  if (n === 0 || n === 100) {
    return "the Children didn't get any apples";
  } else {
    let result = n - n * (percent / 100);
    return result;
  }
}
console.log(getNumberOfApples(10, "90%"));
// console.log(getNumberOfApples(25,'10%'))

//////////

function doubleFactorial(n) {
  // if(n<2)return 1
  // if (n == 0 || n == 1)return 1;
  //   return n * doubleFactorial(n - 2);

  let result = 1;

  while (n > 0) {
    result *= n;
    n -= 2;
  }
  return result;
}

console.log(doubleFactorial(9));
console.log(doubleFactorial(2));
////////

function consecutiveSum(n) {
  while (n > 2) {
    if (n % 2 !== 0) return true;
    n /= 2;
  }
  return false;
}
// console.log(consecutiveSum(64))
console.log(consecutiveSum(10));
