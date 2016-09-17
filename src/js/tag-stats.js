(function() {

function tagStatsForParticipants(tagLists) {
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
  return sumUp(statsForOneParticipant(tagLists[0]), tagStatsForParticipants(tagLists.slice(1)));
}

function statsForOneParticipant(tags) {
  function collect(stats, tag) {
    stats[tag] = 1;
    return stats;
  }
  return tags.reduce(collect, {});
}

if ('undefined'!=typeof module && module.exports) {
  module.exports = tagStatsForParticipants;
} else {
  // when loaded in the browser
  window.tagStatsForParticipants = tagStatsForParticipants;
}
})();