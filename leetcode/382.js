var Solution = function (head) {
  this.l = head;
};

Solution.prototype.getRandom = function () {
  let [count, rst, list] = [1, null, this.l];
  while (list) {
    if (Math.floor(Math.random() * count) == 0) rst = list.val;
    list = list.next;
    count++;
  }
  return rst;
};
