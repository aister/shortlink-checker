/*!
 * shortlink-checker
 * Copyright(c) 2016 Aister Pendragon
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 */

var request = require('request');

module.exports = checkURL

function checkURL(url) {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      followRedirect: false
    }, function(err, res, body) {
      if (res.statusCode == 301) {
        resolve(res.headers.location);
      } else {
        resolve(false);
      }
    });
  });
}
