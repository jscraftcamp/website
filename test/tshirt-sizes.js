const hamjest = require("hamjest");
const assertThat = hamjest.assertThat;
const hasProperty = hamjest.hasProperty;
const equalTo = hamjest.equalTo;
const sortShirtSizes = require('../static/js/tshirt-sizes');

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
  describe('lists the total', () => {
    it('overall', () => {
      assertThat(sortShirtSizes(shirts).total, equalTo(11));
    });
    it('for `M`', () => {
      assertThat(sortShirtSizes(shirts).M.total, equalTo(8));
    });
    it('for `W`', () => {
      assertThat(sortShirtSizes(shirts).W.total, equalTo(3));
    });
  });
});