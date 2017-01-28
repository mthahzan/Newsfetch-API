'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/* GET users listing. */
router.get('/', (req, res) => {
  models
    .User
    .findAll()
    .then((users) => {
      res.send(users);
    })
    .catch(next);
});

module.exports = router;
