'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/* GET users listing. */
router.get('/', (req, res, next) => {
  const options = {
    attributes: {
      exclude: ['password'],
    },
  };

  models
    .User
    .findAll(options)
    .then((users) => {
      res.send(users);
    })
    .catch(next);
});

module.exports = router;
