'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/**
 * GET all Commercials
 */
router.get('/', (req, res, next) => {
  models
    .Post
    .findAll()
    .then((posts) => {
      res.send({
        results: posts,
      });
    })
    .catch(next);
});

/**
 * GET Commercial by ID
 */
router.get(':commercialId', (req, res, next) => {
  models
    .PostType
    .findOne({
      where: {
        id: req.param.commercialId,
      },
    })
    .then((post) => {
      res.send(post);
    })
    .catch(next);
});

module.exports = router;
