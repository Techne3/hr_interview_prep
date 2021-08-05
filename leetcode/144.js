var preorderTraversal = function (root) {
  var array = [];
  var ans = [];
  var cur = root;

  if (root === null) return [];

  array.push(cur);
  do {
    if (cur !== null) ans.push(cur.val);

    if (cur.right !== null) array.push(cur.right);

    if (cur.left !== null) array.push(cur.left);

    cur = array.pop();
  } while (array.length > 0);

  return ans;
};
