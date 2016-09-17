(function (){

  function updateForSize(curShape, size) {
    if (!curShape[size]) {
      curShape[size] = 1;
    } else {
      curShape[size]++;
    }
  }

  function updateForShape(sizesObj, shape) {
    if (!sizesObj[shape]) {
      sizesObj[shape] = { total: 0 };
    }
    sizesObj[shape].total++;
  }

  function sortShirtSizes(shirts) {
  function buildSizesObject(sizesObj, cur) {
    var split = cur.split('-');
    var shape = split[0]; // M or W
    var size = split[1]; // L, XL, ...
    updateForShape(sizesObj, shape);
    updateForSize(sizesObj[shape], size);
    sizesObj.total++;
    return sizesObj;
  }
  return shirts.reduce(buildSizesObject, { total: 0 });
}

if ('undefined'!=typeof module && module.exports) {
  module.exports = sortShirtSizes;
} else {
  // when loaded in the browser
  window.sortShirtSizes = sortShirtSizes;
}
})();
