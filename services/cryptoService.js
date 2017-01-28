'use strict';
const crypto = require('crypto');

/**
 * Create Hash string using the value
 * @param  {String} value The value to be hashed
 * @return {String}       The hashed string
 */
const createHash = (value) => {
  return crypto.createHash('sha256').update(value).digest('base64');
};

module.exports = {
  createHash,
};
