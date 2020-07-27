// https://edabit.com/challenge/8n9RyHThC3dNEPCng

function capToFront(s) {
  let splitArr = s.split("");
  let front = [];
  let back = [];

  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i] === splitArr[i].toUpperCase()) {
      front.push(splitArr[i]);
    } else {
      back.push(splitArr[i]);
    }
  }

  return [...front, ...back].join("");
  //   return front.concat(back).join("");
}

console.log(capToFront("hApPy"));

///////////////////

// https://edabit.com/challenge/GLbuMfTtDWwDv2F
function countTrue(arr) {
  return [...arr].filter((el) => el === true).length;
}

console.log(countTrue([true, false, false, true, false]));

////////////////
// https://edabit.com/challenge/YT2kXSMEtACPPk35R

function intWithinBounds(n, lower, upper) {
  if (Number.isInteger(n)) {
    for (lower; lower < upper; lower++) {
      if (n === lower) {
        return true;
      }
    }
  }
  return false;
}

console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(4.5, 4, 8));
