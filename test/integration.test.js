const test = require('ava');
const {stub} = require('sinon');
const clearModule = require('clear-module');

/* eslint camelcase: ["error", {properties: "never"}] */

test.beforeEach((t) => {
  // Clear npm cache to refresh the module state
  clearModule('..');
  t.context.m = require('..');
  // Stub the logger
  t.context.log = stub();
  t.context.error = stub();
  t.context.logger = {log: t.context.log, error: t.context.error};
});

test.serial('Verify release token', async (t) => {
  const env = {SEMANTIC_RELEASE_RELEASE_TYPE: 'major'};
  await t.notThrowsAsync(t.context.m.verifyConditions({}, {env, logger: t.context.logger}));
});

test.serial('Throw SemanticReleaseError if invalid config', async (t) => {
  const env = {};

  const errors = [...(await t.throwsAsync(t.context.m.verifyConditions({}, {env, logger: t.context.logger})))];

  t.is(errors[0].name, 'SemanticReleaseError');
  t.is(errors[0].code, 'ENORELEASETYPE');
});

test.serial('Pass release type defined in environment variable', async (t) => {
  const env = {SEMANTIC_RELEASE_RELEASE_TYPE: 'major'};

  t.is(await t.context.m.analyzeCommits({}, {env, logger: t.context.logger}), 'major');
});
