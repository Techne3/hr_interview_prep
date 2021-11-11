var findRestaurant = function (list1, list2) {
  ind_map = new Map(
    list1
      .map((el, ind) => [
        el,
        list2.includes(el) ? ind + list2.indexOf(el) : null,
      ])
      .filter((el) => el[1] !== null)
  );
  min_index_sum = Math.min.apply(null, Array.from(ind_map.values()));
  return Array.from(ind_map.entries())
    .filter((el) => el[1] === min_index_sum)
    .map((el) => el[0]);
};
