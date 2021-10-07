var nextGreaterElement = function (nums1, nums2) {
  const loopLength = nums2.length - 1;
  const greaterNums = nums1.map((num) => {
    for (let i = nums2.indexOf(num); i <= loopLength; i++) {
      if (nums2[i] > num) {
        return nums2[i];
      }
    }
    return -1;
  });
  return greaterNums;
};
