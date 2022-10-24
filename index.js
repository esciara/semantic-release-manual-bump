const manualReleaseType = require('./lib/manual-release-type.js');

/**
 * Determine the type of release to create based on a list of commits.
 *
 * @param {Object} pluginConfig The plugin configuration.
 * @param {Object} context The semantic-release context.
 *
 * @returns {String|null} the type of release to create based on the list of commits or `null` if no release has to be done.
 */
async function manualBump(pluginConfig, context) {
  const {logger} = context;
  const releaseType = manualReleaseType();

  logger.log('Manual bump: %s release', releaseType || 'no');

  return releaseType;
}

module.exports = {manualBump};
