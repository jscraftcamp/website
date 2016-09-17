const hamjest = require('hamjest');
const assertThat = hamjest.assertThat;
const equalTo = hamjest.equalTo;

function statsForParticipants(tagLists) {
  function sumUp(tags1, tags2) {
    var sum = {};
    // copy all tags1 content
    for (var key in tags1) {
      sum[key] = tags1[key];
    }
    // add tags2 onto it
    for (var key in tags2) {
      if (key in sum) {
        sum[key] += tags2[key];
      } else {
        sum[key] = tags2[key];
      }
    }
    return sum;
  }
  if (tagLists.length === 1) {
    return statsForOneParticipant(tagLists[0]);
  }
  return sumUp(statsForOneParticipant(tagLists[0]), statsForParticipants(tagLists.slice(1)));
}

function statsForOneParticipant(tags) {
  function collect(stats, tag) {
    stats[tag] = 1;
    return stats;
  }
  return tags.reduce(collect, {});
}

describe('Tag stats (get collected for each participant)', () => {
  it('only unique tags for one user, report the same as stats', () => {
    const tags = ['one', 'two'];
    const stats = statsForOneParticipant(tags);
    assertThat(stats, equalTo({ one: 1, two: 1 }));
  });
  it('unique tags for two users, report the same as stats', () => {
    const stats = statsForParticipants([['one', 'two'], ['three']]);
    assertThat(stats, equalTo({ one: 1, two: 1, three: 1 }));
  });
  it('overlapping tags for many users', () => {
    const stats = statsForParticipants([['one', 'two'], ['three'], ['one', 'three']]);
    assertThat(stats, equalTo({ one: 2, two: 1, three: 2 }));
  });
});
