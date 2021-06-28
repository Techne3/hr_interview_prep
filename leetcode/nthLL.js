var removeNthFromEnd = function (head, n) {
  let runner = head;
  let curr = head;
  let prev = head;
  let i = 0;
  let counter = 0;

  if (n === 0) return head;

  while (runner) {
    if (i < n) {
      i++;
    } else if (i === n) {
      prev = curr;
      curr = curr.next;
    }
    runner = runner.next;
    counter++;
  }

  if (n === counter) {
    return head.next;
  }

  prev.next = curr.next;

  return head;
};
