'use strict';
const Promise = require('bluebird');
const express = require('express');
const router = express.Router(); // eslint-disable-line

const tokenFactory = require('../services/tokenFactory');
const errorFactory = require('../services/errorFactory');
const cryptoService = require('../services/cryptoService');

const models = require('../models');

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
      const tokenData = {
        user: {
          id: user.id,
        },
      };
      const token = tokenFactory.issueAuthToken(tokenData);

      res.send({
        user: {
          id: user.id,
          name: user.name,
          role: user.role,
          authName: user.authName,
          appPreferences: user.appPreferences,
        },
        authToken: token,
      });
    })
    .catch(next);
});

module.exports = router;
