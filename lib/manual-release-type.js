const resolveConfig = require('./resolve-config');

/**
 * Returns the manually configured release type.
 *
 * @param {PluginConfig} pluginConfig.
 * @param {Context} context.
 * @return {string} release type.
 */
module.exports = (pluginConfig, context) => {
  const {releaseType} = resolveConfig(pluginConfig, context);
  return releaseType;
};
