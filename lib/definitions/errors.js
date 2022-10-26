const pkg = require('../../package.json');

const [homepage] = pkg.homepage.split('#');
const linkify = (file) => `${homepage}/blob/main/${file}`;

module.exports = {
  EINVALIDRELEASETYPE: ({releaseType}) => ({
    message: 'Invalid release type.',
    details: `The [release type](${linkify(
      'README.md#environment-variables'
    )}) configured in the \`SEMANTIC_RELEASE_RELEASE_TYPE\` environment variable must be a valid.

Please make sure to set the \`SEMANTIC_RELEASE_RELEASE_TYPE\` environment variable in your CI is valid. The release type you provided (${releaseType}) is not valid.`,
  }),
  ENORELEASETYPE: () => ({
    message: 'No release type specified.',
    details: `A [release type](${linkify(
      'README.md#environment-variables'
    )}) must be created and set in the \`SEMANTIC_RELEASE_RELEASE_TYPE\` environment variable on your CI environment.

Please make sure to set it in the \`SEMANTIC_RELEASE_RELEASE_TYPE\` environment variable on your CI environment.`,
  }),
};
