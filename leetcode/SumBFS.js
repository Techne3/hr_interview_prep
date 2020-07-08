// https://leetcode.com/problems/range-sum-of-bst/

var rangeSumBST = function (root, l, r) {
  if (root == null) return 0;

  let res = 0;

  if (l <= root.val) {
    res += root.val + rangeSumBST(root.left, l, r);
  }
  if (r >= root.val) {
    res += root.val + rangeSumBST(root.right, l, r);
  }

  return res - root.val;
};
console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));
