const test = require('ava');
const resolveConfig = require('../lib/resolve-config');

test('Returns user config', (t) => {
  const releaseType = 'patch';

  t.deepEqual(resolveConfig({}, {env: {SEMANTIC_RELEASE_RELEASE_TYPE: releaseType}}), {releaseType: 'patch'});
});
