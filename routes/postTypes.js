'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/**
 * GET all PostTypes
 */
router.get('/', (req, res, next) => {
  models
    .PostType
    .findAll()
    .then((postTypes) => {
      res.send({
        results: postTypes,
      });
    })
    .catch(next);
});

/**
 * GET PostType by ID
 */
router.get(':postTypeId', (req, res, next) => {
  models
    .PostType
    .findOne({
      where: {
        id: req.param.postTypeId,
      },
      include: [models.Post],
    })
    .then((postType) => {
      res.send(postType);
    })
    .catch(next);
});

module.exports = router;
