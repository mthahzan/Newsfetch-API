'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/**
 * GET all PostTypes
 */
router.get('/', (req, res, next) => {
  const where = {};

  // See if the user sent us the lastUpdate date so we can send back only the updates
  if (req.query.lastUpdate && !isNaN(req.query.lastUpdate)) {
    where.updatedAt = {
      $gt: new Date(parseInt(req.query.lastUpdate)),
    };
  }

  models
    .PostType
    .findAll({
      where,
    })
    .then((postTypes) => res.send({results: postTypes}))
    .catch(next);
});

/**
 * GET PostType by ID
 */
router.get('/:postTypeId', (req, res, next) => {
  models
    .PostType
    .findOne({
      where: {
        id: req.param.postTypeId,
      },
      include: [models.Post],
    })
    .then((postType) => res.send(postType))
    .catch(next);
});

module.exports = router;
