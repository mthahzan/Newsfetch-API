'use strict';
const tokenFactory = require('../services/tokenFactory');
const errorFactory = require('../services/errorFactory');

const models = require('../models');

/**
 * The middleware to authorize requests that should be protected by a login
 * @param  {object}   req  The request object provided by the Express router
 * @param  {object}   res  The response object provided by the Express router
 * @param  {Function} next The callback to move the operation forward
 */
const authRequired = (req, res, next) => {
  try {
    // TODO: Simplify the RegExp
    const authorizationHeader = req.header('Authorization') || '';
    const token = authorizationHeader.split('Bearer: ').pop();
    const decoded = tokenFactory.verifyAuthToken(token);

    models
      .User
      .findById(decoded.user.id)
      .then((user) => {
        let error = null;
        if (!user) {
          error = errorFactory.unauthorized(req);
        }

        next(error);
      })
      .catch(next);
  } catch (e) {
    next(errorFactory.unauthorized(req));
  }
};

module.exports = authRequired;
