'use strict';
const Promise = require('bluebird');
const express = require('express');
const router = express.Router(); // eslint-disable-line

const config = require('../config');

const authRequired = require('../middlewares/authRequired');

const tokenFactory = require('../services/tokenFactory');
const errorFactory = require('../services/errorFactory');
const cryptoService = require('../services/cryptoService');

const models = require('../models');

/**
 * Create the auth token
 * @param  {object} user The user object
 * @return {string}      The created token string
 */
const createAuthToken = (user) => {
  const tokenData = {
    user: {
      id: user.id,
    },
  };

  return tokenFactory.issueAuthToken(tokenData);
};

/**
 * Creates the response object
 * @param  {object} user User object
 * @return {object}      Response object
 */
const prepareResponse = (user) => {
  const nowTime = Date.now();
  const expiration = (nowTime + config.authToken.expiresIn) * 1000; // Add expiration time and convert to milliseconds

  return {
    expiration,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
      authName: user.authName,
      appPreferences: user.appPreferences,
    },
    authToken: createAuthToken(user),
  };
};

/**
 * Registering the '/' route to accept both login and register
 */
router.post('/', (req, res, next) => {
  const authName = req.body.authName;
  const password = cryptoService.createHash(req.body.password);
  const findOptions = {
    where: {
      authName,
    },
  };

  models
    .User
    .findOne(findOptions)
    .then((user) => {
      let promise = null;

      if (user) {
        // There's a user with the current authName
        // Check for password match or else say invalid credentials
        if (user.password === password) {
          promise = Promise.resolve(user);
        } else {
          // Wrong password
          throw errorFactory.unauthorized(req, 'Invalid credentials');
        }
      } else {
        // There's no user
        // Create one
        promise = models.User.create({
          authName,
          password,
        });
      }

      return promise;
    })
    .then((user) => {
      res.send(prepareResponse(user));
    })
    .catch(next);
});

/**
 * API endpoint to refresh the auth token
 */
router.get('/token', authRequired, (req, res) => res.send(prepareResponse(req.user)));

module.exports = router;
