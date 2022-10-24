const test = require('ava');
const manualReleaseType = require('../lib/manual-release-type.js');

test('Match revert commit', (t) => {
  t.is(manualReleaseType(), 'patch');
});
