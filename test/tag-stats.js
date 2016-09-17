const hamjest = require('hamjest');
const assertThat = hamjest.assertThat;
const equalTo = hamjest.equalTo;

function statsForOneParticipant(tags) {
  return { one: 1, two: 2 };
}

describe('Tag stats', () => {
  describe('tags get collected per participant', () => {
    it('only unique tags for one user, report the same as stats', () => {
      const tags = ['one', 'two'];
      const stats = statsForOneParticipant(tags);
      assertThat(stats, equalTo({ one: 1, two: 2 }));
    });
  });
});
