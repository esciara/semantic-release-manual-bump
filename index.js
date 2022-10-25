const verifyManualRelease = require('./lib/verify');
const manualReleaseType = require('./lib/manual-release-type.js');

let verified;

async function verifyConditions(pluginConfig, context) {
  await verifyManualRelease(pluginConfig, context);
  verified = true;
}

/**
 * Determine the type of release to create based on a list of commits.
 *
 * @param {Object} pluginConfig The plugin configuration.
 * @param {Object} context The semantic-release context.
 *
 * @returns {String|null} the type of release to create based on the list of commits or `null` if no release has to be done.
 */
async function analyzeCommits(pluginConfig, context) {
  if (!verified) {
    await verifyManualRelease(pluginConfig, context);
    verified = true;
  }

  const {logger} = context;
  const releaseType = manualReleaseType(pluginConfig, context);

  logger.log('Manual bump: %s release', releaseType || 'no');

  return releaseType;
}

module.exports = {verifyConditions, analyzeCommits};
