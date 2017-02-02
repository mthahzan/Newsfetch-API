'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const models = require('../models');

/**
 * GET all CommercialTypes
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
    .CommercialType
    .findAll({
      where,
    })
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
        id: req.param.commercialTypeId,
      },
      include: [models.Commercial],
    })
    .then((commercialType) => {
      res.send(commercialType);
    })
    .catch(next);
});

module.exports = router;
