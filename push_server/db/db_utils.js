/**
 * Utilities for working with the push server database.
 */

var db = require('./db');

var syncDatabase = function(success, failure) {

  db
    .sync()
    .on('success', success)
    .on('failure', failure);

};


module.exports.syncDatabase = syncDatabase;
