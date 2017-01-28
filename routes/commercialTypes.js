'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/**
 * GET all CommercialTypes
 */
router.get('/', (req, res, next) => {
  models
    .CommercialType
    .findAll()
    .then((commercialTypes) => {
      res.send({
        results: commercialTypes,
      });
    })
    .catch(next);
});

/**
 * GET CommercialType by ID
 */
router.get(':commercialTypeId', (req, res, next) => {
  models
    .CommercialType
    .findOne({
      where: {
        id: req.param.postId,
      },
      include: [models.Post],
    })
    .then((commercialType) => {
      res.send(commercialType);
    })
    .catch(next);
});

module.exports = router;
