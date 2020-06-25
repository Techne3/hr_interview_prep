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
console.log(cmsSelector(["try", "this"], ""));

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
