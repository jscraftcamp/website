const hamjest = require('hamjest');
const assertThat = hamjest.assertThat;
const equalTo = hamjest.equalTo;

function statsForOneParticipant(tags) {
  function collect(stats, tag) {
    stats[tag] = 1;
    return stats;
  }
  return tags.reduce(collect, {});
}

describe('Tag stats', () => {
  describe('tags get collected per participant', () => {
    it('only unique tags for one user, report the same as stats', () => {
      const tags = ['one', 'two'];
      const stats = statsForOneParticipant(tags);
      assertThat(stats, equalTo({ one: 1, two: 1 }));
    });
  });
});
