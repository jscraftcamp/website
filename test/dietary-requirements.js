const hamjest = require("hamjest");
const assertThat = hamjest.assertThat;
const hasProperty = hamjest.hasProperty;
const equalTo = hamjest.equalTo;
const sortDietaryRequirements = require('../src/js/dietary-requirements');

describe("Dietary requirements", () => {
  const allRequirements = ["vegan","vegetarian","food","none","vegetarian","vegan","vegan","none"];

  it('has all requirements as keys', () => {
    const requirements = sortDietaryRequirements(allRequirements);
    assertThat(requirements, hasProperty('vegan'));
    assertThat(requirements, hasProperty('vegetarian'));
    assertThat(requirements, hasProperty('food'));
    assertThat(requirements, hasProperty('none'));
  });

  describe('lists the total', () => {
    it('overall', () => {
      assertThat(sortDietaryRequirements(allRequirements).total, equalTo(8));
    });
    it('for vegan', () => {
      assertThat(sortDietaryRequirements(allRequirements).vegan.total, equalTo(3));
    });
    it('for vegetarian', () => {
      assertThat(sortDietaryRequirements(allRequirements).vegetarian.total, equalTo(2));
    });
    it('for none', () => {
      assertThat(sortDietaryRequirements(allRequirements).vegetarian.total, equalTo(2));
  });
  });
});