var queries = require('./model/queries');

exports.getBaseQueries = function() {
  var totalAmount = queries.length;
  return queries;
}
