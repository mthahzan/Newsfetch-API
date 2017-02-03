'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const queryParser = require('../services/queryParser');

const models = require('../models');

/**
 * GET all CommercialTypes
 */
router.get('/', (req, res, next) => {
  const where = {};
  const updatedAt = queryParser.parseLastUpdate(req);

  if (updatedAt) {
    where.updatedAt = updatedAt;
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
        id: req.params.commercialTypeId,
      },
      include: [{
        model: models.Commercial, where: {
          active: true,
        },
      }],
    })
    .then((commercialType) => {
      res.send(commercialType);
    })
    .catch(next);
});

module.exports = router;
