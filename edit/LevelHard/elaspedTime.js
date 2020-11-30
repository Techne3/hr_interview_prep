const t0 = new Date("01/01/00").getTime();

function elapsedTime(sa, st) {
  let ms = new Date("01/01/00" + st) - new Date("01/01/00" + sa);
  let et = new Date(t0 + (ms < 0 ? ms + 3600 * 24000 : ms));
  return et.toString().substr(16, 8);
}
console.log(elapsedTime("11:00:00", "12:00:00"));
