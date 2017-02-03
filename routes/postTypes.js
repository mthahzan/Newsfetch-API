'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const queryParser = require('../services/queryParser');

const models = require('../models');

/**
 * GET all PostTypes
 */
router.get('/', (req, res, next) => {
  const where = {};
  const updatedAt = queryParser.parseLastUpdate(req);

  if (updatedAt) {
    where.updatedAt = updatedAt;
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
        id: req.params.postTypeId,
      },
      include: [{
        model: models.Post, where: {
          active: true,
        },
      }],
    })
    .then((postType) => res.send(postType))
    .catch(next);
});

/**
 * GET Posts of PostType
 */
// router.get('/:postTypeId/posts', (req, res, next) => {
//   models
//     .Post
//     .findAll({
//       where: {
//         PostTypeId: req.params.postTypeId,
//       },
//     })
//     .then((posts) => res.send({results: posts}))
//     .catch(next);
// });

module.exports = router;
