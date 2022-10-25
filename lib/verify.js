const {includes} = require('lodash');
const debug = require('debug')('semantic-release:gitlab');
const AggregateError = require('aggregate-error');
const resolveConfig = require('./resolve-config');
const getError = require('./get-error');

module.exports = async (pluginConfig, context) => {
  const {logger} = context;
  const {releaseType} = resolveConfig(pluginConfig, context);
  debug('releaseType: %o', releaseType);

  const errors = [];

  if (releaseType) {
    logger.log('Verify releaseType valid (%s)', releaseType);

    if (!includes(['major', 'minor', 'patch'], releaseType)) {
      errors.push(getError('EINVALIDRELEASETYPE', {releaseType}));
    }
  } else {
    errors.push(getError('ENORELEASETYPE'));
  }

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
};
