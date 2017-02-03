'use strict';
const express = require('express');
const router = express.Router(); // eslint-disable-line

const adminRequired = require('../middlewares/adminRequired');

const errorFactory = require('../services/errorFactory');

const models = require('../models');

/**
 * Validates the creating commercial object
 * @param  {object}  commercial Creating Commercial object
 * @return {Boolean}            TRUE if valid
 */
const isCreatingCommercialValid = (commercial) => {
  return (
    commercial &&
    commercial.title && commercial.title.length &&
    commercial.content && commercial.content.length
  );
};

/**
 * GET all Commercials
 */
router.get('/', (req, res, next) => {
  models
    .Commercial
    .findAll()
    .then((commercials) => {
      res.send({
        results: commercials,
      });
    })
    .catch(next);
});

/**
 * GET Commercial by ID
 */
router.get(':commercialId', (req, res, next) => {
  models
    .Commercial
    .findOne({
      where: {
        id: req.params.commercialId,
      },
    })
    .then((commercial) => {
      res.send(commercial);
    })
    .catch(next);
});

/**
 * POST a new commercial
 */
router.post('/', adminRequired, (req, res, next) => {
  if (isCreatingCommercialValid(req.body.commercial)) {
    // Inject the user ID
    req.body.commercial.UserId = req.user.id;

    models
      .Commercial
      .create(req.body.commercial)
      .then((createdCommercial) => {
        return res.send(createdCommercial);
      })
      .catch(next);
  } else {
    next(errorFactory.badRequest(req, 'Validation failure'));
  }
});

module.exports = router;
