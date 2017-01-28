'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const tokenFactory = require('../services/tokenFactory');
const errorFactory = require('../services/errorFactory');

/**
 * Temp object with users
 * @type {Array}
 */
const users = [{
  mobileNumber: '0711911644',
  password: 'user@123',
}, {
  mobileNumber: '0757337447',
  password: 'user@123',
}];

/**
 * Checks if the given credentials are correct
 * @param  {String} username The username
 * @param  {String} password The password
 * @return {Boolean}         Flag specifying whether the user exists
 */
const userAvailable = (username, password) => {
  return users.filter((user) =>
          user.username === username &&
          user.password === password).length > 0;
};

/**
 * Checks if the given credentials are correct asynchronously
 * @param  {String} username The username
 * @param  {String} password The password
 * @return {Promise}         The promise of the user availability task
 */
const isUserAvailableAsync = (username, password) => {
  return new Promise((resolve, reject) => {
    userAvailable(username, password) ? resolve() : reject();
  });
};

/**
 * Registering the '/login' route
 */
router.post('/login', (req, res, next) => {
  isUserAvailableAsync(req.body.username, req.body.password)
    .then(() => {
      const tokenData = {
        username: req.username,
        message: 'Welcome home Asshole',
      };

      res.send({
        message: `Welcome ${req.body.username}`,
        token: tokenFactory.issueAuthToken(tokenData),
      });
    })
    .catch(() => {
      next(errorFactory.unauthorized(req));
    });
});

module.exports = router;
