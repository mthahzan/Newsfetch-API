'use strict';
const errorFactory = require('../services/errorFactory');

/**
 * Checks for user authorization
 * @param  {object}  user The user object
 * @return {Boolean}      TRUE if authorized
 */
const isUserAuthorized = (user) => {
  return user && user.role === 'admin';
};

/**
 * The middleware to authorize requests that should only be accessible for an administrative user
 * @param  {object}   req  The request object provided by the Express router
 * @param  {object}   res  The response object provided by the Express router
 * @param  {Function} next The callback to move the operation forward
 */
const authRequired = (req, res, next) => {
  let error = null;

  if (!isUserAuthorized(req.user)) {
    error = errorFactory.unauthorized(req);
  }

  next(error);
};

module.exports = authRequired;
