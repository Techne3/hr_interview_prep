var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (!needle.length) return 0;

  let resultIndex = false;
  let needleIndex = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[needleIndex]) {
      if (resultIndex === false) {
        resultIndex = i;
      }

      needleIndex++;
      if (needleIndex === needle.length) return resultIndex;
    } else {
      if (resultIndex !== false) {
        i = resultIndex;
      }
      resultIndex = false;
      needleIndex = 0;
    }
  }

  return -1;
};
