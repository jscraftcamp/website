const hamjest = require('hamjest');
const assertThat = hamjest.assertThat;
const equalTo = hamjest.equalTo;
const hasProperties = hamjest.hasProperties;
const tagStatsForParticipants = require('../src/js/tag-stats');

describe('Tag stats (get collected for each participant)', () => {
  it('overlapping tags for many users', () => {
    const stats = tagStatsForParticipants([['one', 'two'], ['three'], ['one', 'three']]);
    assertThat(stats[0], hasProperties({name: 'one', count: 2}));
    assertThat(stats[1], hasProperties({name: 'two', count: 1}));
    assertThat(stats[2], hasProperties({name: 'three', count: 2}));
  });
  it('case-insensitive', () => {
    const stats = tagStatsForParticipants([['one', 'Two'], ['THREE'], ['one', 'three']]);
    assertThat(stats[0], hasProperties({name: 'one', count: 2}));
    assertThat(stats[1], hasProperties({name: 'two', count: 1}));
    assertThat(stats[2], hasProperties({name: 'three', count: 2}));
  });
  it('fontSize min 8, max 30', () => {
    const fiveTags = [['one'], ['one'], ['one'], ['one'], ['one']];
    const tenTags = [...fiveTags, ...fiveTags];
    const stats = tagStatsForParticipants([['two'], ...[...tenTags, ...tenTags, ...tenTags, ...tenTags]]);
    assertThat(stats, equalTo([{name: 'two', count: 1, fontSize: 8}, { name: 'one', count: 40, fontSize: 30}]));
  });
});
