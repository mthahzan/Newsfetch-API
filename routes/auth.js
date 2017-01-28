'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const tokenFactory = require('../services/tokenFactory');
const cryptoService = require('../services/cryptoService');

const models = require('../models');

/**
 * Registering the '/' route to accept both login and register
 */
router.post('/', (req, res, next) => {
  const authName = req.body.authName;
  const password = req.body.password;
  const findOptions = {
    attributes: {
      exclude: ['password'],
    },
    where: {
      authName,
      password: cryptoService.createHash(password),
    },
  };

  models
    .User
    .findOrCreate(findOptions)
    .then((user) => {
      const tokenData = {
        user: {
          id: user.id,
        },
      };
      const token = tokenFactory.issueAuthToken(tokenData);

      res.send({
        message: `Welcome ${req.body.username}`,
        token: token,
      });
    })
    .catch(next);
});

module.exports = router;
