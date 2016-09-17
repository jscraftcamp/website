const hamjest = require("hamjest");
const assertThat = hamjest.assertThat;
const hasProperty = hamjest.hasProperty;
const equalTo = hamjest.equalTo;

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

describe("T-Shirt sizes", () => {
  const shirts = ["M-L","M-M","W-M","W-M","M-L","M-XL","M-L","M-L","W-XL","M-XL","M-M"];
  it('indexed by M/W', () => {
    const sizes = sortShirtSizes(shirts);
    assertThat(sizes, hasProperty('M'));
    assertThat(sizes, hasProperty('W'));
  });
  it('`M` has all sizes as keys', () => {
    const sizes = sortShirtSizes(shirts);
    assertThat(sizes.M, hasProperty('L'));
    assertThat(sizes.M, hasProperty('M'));
    assertThat(sizes.M, hasProperty('XL'));
  });
  it('the count per size is correct', () => {
    const sizes = sortShirtSizes(shirts);
    assertThat(sizes.W.M, equalTo(2));
    assertThat(sizes.W.XL, equalTo(1));
  });
});