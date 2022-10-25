module.exports = (_, {env: {SEMANTIC_RELEASE_RELEASE_TYPE}}) => {
  return {releaseType: SEMANTIC_RELEASE_RELEASE_TYPE};
};
