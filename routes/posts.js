'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/**
 * GET all Posts
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
 * GET PostType by ID
 */
router.get('/:postId', (req, res, next) => {
  models
    .PostType
    .findOne({
      where: {
        id: req.param.postId,
      },
    })
    .then((post) => {
      res.send(post);
    })
    .catch(next);
});

module.exports = router;
