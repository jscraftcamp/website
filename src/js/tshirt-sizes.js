function sortShirtSizes(shirts) {
  function buildSizesObject(sizesObj, cur) {
    var split = cur.split('-');
    var shape = split[0]; // M or W
    var size = split[1]; // L, XL, ...
    if (!sizesObj[shape]) sizesObj[shape] = {};
    if (!sizesObj[shape][size]) {
      sizesObj[shape][size] = 1;
    } else {
      sizesObj[shape][size]++;
    }
    return sizesObj;
  }
  return shirts.reduce(buildSizesObject, {});
}
if ('undefined'!=typeof module && module.exports) {
  module.exports = sortShirtSizes;
}
