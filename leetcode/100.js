var isSameTree = function (p, q) {
  if (p == null && q == null) return true; // Both empty "sub trees"
  if (p == null) return false; // Only p is empty "sub tree"
  if (q == null) return false; // Only q is empty "sub tree"

  return (
    p.val === q.val && // Ensure values are the same
    isSameTree(p.left, q.left) && //  Ensure left "sub trees" are the same
    isSameTree(p.right, q.right) // Ensure right "sub trees" are the same
  );
};
