'use strict';

/**
 * Parses last updated query param
 * @param  {object} req Request object from Express router
 * @return {object}     The object to inject into the where clause
 */
const parseLastUpdate = (req) => {
  let query = null;

  // See if the user sent us the lastUpdate date so we can send back only the updates
  if (req.query.lastUpdate && !isNaN(req.query.lastUpdate)) {
    query = {
      $gt: new Date(parseInt(req.query.lastUpdate)),
    };
  }

  return query;
};

module.exports = {parseLastUpdate};
