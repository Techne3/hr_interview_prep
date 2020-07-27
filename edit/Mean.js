// https://edabit.com/challenge/WacpbmmhwWJ2Wgmy9

function mean(nums) {
  let arrLength = nums.length;
  let sum = nums.reduce((a, b) => a + b, 0);
  return parseFloat((sum / arrLength).toFixed(1));
}

console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10]));

//////////////

function fact(n) {
  //   total = 1;
  //   for (let i = 1; i <= n; i++) {
  //     total *= i;
  //   }
  //   return total;

  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(6));

//////////////

function reverse(str) {
  // total =[]
  // let reverseArr = str.split('').reverse()

  // for(let i =0; i < reverseArr.length; i++){
  //     if(reverseArr[i] === reverseArr[i].toLowerCase()){
  //        total.push( reverseArr[i].toUpperCase())
  //     }else{
  //         total.push(reverseArr[i].toLowerCase())
  //     }
  // }
  // return total.join('')

  let reversed = str.split("").reverse();
  return reversed
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");
}

console.log(reverse("Hello World"));

////////////////////

function shhh(sentence) {
  let splitArr = sentence.split("");
  let sliced = splitArr.slice(1, splitArr.length).join("").toLowerCase();
  if (sentence) {
    return `"${splitArr[0].toUpperCase()}${sliced}", whispered Edabit.`;
  } else {
    return `"", whispered Eabit`;
  }
  //   return first + sliced.join("").toLowerCase() + ",whispered Edabit";
}

console.log(shhh(""));
