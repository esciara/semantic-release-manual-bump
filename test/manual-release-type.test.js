const test = require('ava');
const manualReleaseType = require('../lib/manual-release-type.js');

test('Match revert commit', (t) => {
  const releaseType = 'major';

  t.is(manualReleaseType({}, {env: {SEMANTIC_RELEASE_RELEASE_TYPE: releaseType}}), 'major');
});
