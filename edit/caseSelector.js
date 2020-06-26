// https://edabit.com/challenge/9wL6dXj2tKNCe5pFz

function cmsSelector(arr, str) {
  return arr.filter((word) => word.toLowerCase().includes(str));
}

console.log(
  cmsSelector(
    ["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"],
    "er"
  )
);
////////////////////
function cmsSelectors(arr, str) {
  let cmsVal = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().match(str)) {
      cmsVal.push(arr[i]);
    }
  }
  return cmsVal.sort();
}
console.log(
  cmsSelectors(
    ["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"],
    "er"
  )
);

/////////////////

function sumEvenNumsInRange(start, stop) {
  let addedEvens = 0;
  for (i = start; i <= stop; i++) {
    addedEvens += i % 2 === 0 ? i : 0;
  }
  return addedEvens;
}

console.log(sumEvenNumsInRange(51, 150));

////////////////
function countUnique(s1, s2) {
  let result = [];
  let array = s1.concat(s2).split("");
  for (let ch of array)
    if (!result.includes(ch)) {
      result.push(ch);
    }
  return result.length;

  /// 	return (new Set(s1 + s2)).size;
}

console.log(countUnique("apple", "play"));
