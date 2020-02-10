(function () {

  function increaseForSize(curShape, size) {
    var shapeHasSizeAlready = size in curShape;
    var count = shapeHasSizeAlready ? curShape[size] : 0;
    curShape[size] = count + 1;
  }

  function updateForShape(sizesObj, shape) {
    var shapeNotInSizesObj = !(shape in sizesObj);
    if (shapeNotInSizesObj) {
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
      increaseForSize(sizesObj[shape], size);
      sizesObj.total++;
      return sizesObj;
    }

    var initialSizesObject = { total: 0 };
    return shirts.reduce(buildSizesObject, initialSizesObject);
  }

  if ('undefined' != typeof module && module.exports) {
    module.exports = sortShirtSizes;
  } else {
    // when loaded in the browser
    window.sortShirtSizes = sortShirtSizes;
  }
})();
