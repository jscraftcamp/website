(function() {

function tagStatsForParticipants(tagLists) {
  function toHandlebarsCompatibleList(sumObj) {
    var handlebarsCompatible = [];
    for (var tagName in sumObj) {
      handlebarsCompatible.push({name: tagName, count: sumObj[tagName]});
    }
    return handlebarsCompatible;
  }
  return toHandlebarsCompatibleList(tagStatsForParticipantsAsObject(tagLists));
}

function cloneObj(obj) {
  var clone = {};
  for (var key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}

function addCounts(cloned, addOnto) {
  for (var key in addOnto) {
    var keyExistsAlready = key in cloned;
    var valueInCloned = keyExistsAlready ? cloned[key] : 0;
    cloned[key] = valueInCloned + addOnto[key];
  }
  return cloned;
}

function tagStatsForParticipantsAsObject(tagLists) {
  function sumUp(tags1, tags2) {
    return addCounts(cloneObj(tags1), tags2);
  }
  if (tagLists.length === 1) {
    return statsForOneParticipant(tagLists[0]);
  }
  return sumUp(statsForOneParticipant(tagLists[0]), tagStatsForParticipantsAsObject(tagLists.slice(1)));
}

function statsForOneParticipant(tags) {
  function collect(stats, tag) {
    stats[tag.toLowerCase()] = 1;
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