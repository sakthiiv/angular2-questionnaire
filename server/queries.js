var queries = require('./model/queries');
var levelQueries = require('./model/level-queries');
var _ = require('lodash');

exports.getBaseQueries = function () {
  return queries;
}

exports.getLevelQueries = ({ id, answer }) => {
  if (id && answer) {
    return _.filter(levelQueries, {
      rootId: id,
      forAnswer: answer.toLowerCase()
    })
  }
  return [];
}
