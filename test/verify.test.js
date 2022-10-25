const test = require('ava');
const {stub} = require('sinon');
const verify = require('../lib/verify');

/* eslint camelcase: ["error", {properties: "never"}] */

test.beforeEach((t) => {
  // Mock logger
  t.context.log = stub();
  t.context.error = stub();
  t.context.logger = {log: t.context.log, error: t.context.error};
});

test.serial('Verify "SEMANTIC_RELEASE_RELEASE_TYPE" can be major', async (t) => {
  const env = {SEMANTIC_RELEASE_RELEASE_TYPE: 'major'};

  await t.notThrowsAsync(verify({}, {env, logger: t.context.logger}));
});

test.serial('Verify "SEMANTIC_RELEASE_RELEASE_TYPE" can be minor', async (t) => {
  const env = {SEMANTIC_RELEASE_RELEASE_TYPE: 'minor'};

  await t.notThrowsAsync(verify({}, {env, logger: t.context.logger}));
});

test.serial('Verify "SEMANTIC_RELEASE_RELEASE_TYPE" can be patch', async (t) => {
  const env = {SEMANTIC_RELEASE_RELEASE_TYPE: 'patch'};

  await t.notThrowsAsync(verify({}, {env, logger: t.context.logger}));
});

test('Throw SemanticReleaseError for missing release type', async (t) => {
  const env = {};
  const [error, ...errors] = await t.throwsAsync(verify({}, {env, logger: t.context.logger}));

  t.is(errors.length, 0);
  t.is(error.name, 'SemanticReleaseError');
  t.is(error.code, 'ENORELEASETYPE');
});

test.serial('Throw SemanticReleaseError for invalid release type', async (t) => {
  const env = {SEMANTIC_RELEASE_RELEASE_TYPE: 'dummy'};
  const [error, ...errors] = await t.throwsAsync(verify({}, {env, logger: t.context.logger}));

  t.is(errors.length, 0);
  t.is(error.name, 'SemanticReleaseError');
  t.is(error.code, 'EINVALIDRELEASETYPE');
});
