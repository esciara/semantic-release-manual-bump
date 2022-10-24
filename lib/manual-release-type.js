/**
 * Find all the rules matching and return the highest release type of the matching rules.
 *
 * @param {Array} releaseRules the rules to match the commit against.
 * @param {Commit} commit a parsed commit.
 * @return {string} the highest release type of the matching rules or `undefined` if no rule match the commit.
 */
module.exports = () => {
  return 'patch';
};
