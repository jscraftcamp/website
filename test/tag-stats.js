const hamjest = require('hamjest');
const assertThat = hamjest.assertThat;
const equalTo = hamjest.equalTo;
const tagStatsForParticipants = require('../src/js/tag-stats');

describe('Tag stats (get collected for each participant)', () => {
  it('only unique tags for one user, report the same as stats', () => {
    const tags = ['one', 'two'];
    const stats = tagStatsForParticipants([tags]);
    assertThat(stats, equalTo({ one: 1, two: 1 }));
  });
  it('unique tags for two users, report the same as stats', () => {
    const stats = tagStatsForParticipants([['one', 'two'], ['three']]);
    assertThat(stats, equalTo({ one: 1, two: 1, three: 1 }));
  });
  it('overlapping tags for many users', () => {
    const stats = tagStatsForParticipants([['one', 'two'], ['three'], ['one', 'three']]);
    assertThat(stats, equalTo({ one: 2, two: 1, three: 2 }));
  });
});
