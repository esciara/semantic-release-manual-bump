# **manual-bump**

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to manually bump releases.

[![Build Status](https://github.com/esciara/semantic-release-manual-bump/workflows/Test/badge.svg)](https://github.com/esciara/semantic-release-manual-bump/actions?query=workflow%3ATest+branch%3Amain) [![npm latest version](https://img.shields.io/npm/v/@esciara/semantic-release-manual-bump/latest.svg)](https://www.npmjs.com/package/@esciara/semantic-release-manual-bump)
[![npm next version](https://img.shields.io/npm/v/@esciara/semantic-release-manual-bump/next.svg)](https://www.npmjs.com/package/@esciara/semantic-release-manual-bump)
[![npm beta version](https://img.shields.io/npm/v/@esciara/semantic-release-manual-bump/beta.svg)](https://www.npmjs.com/package/@esciara/semantic-release-manual-bump)

| Step               | Description                                                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `verifyConditions` | Verify the presence and the validity of the manual bump configuration (set via [environment variables](#environment-variables)). |
| `analyzeCommits`   | Determine the type of release by using the configuration (see [Configuration](#configuration)).                                  |

## Install

```bash
$ npm install @esciara/semantic-release-manual-bump -D
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@esciara-semantic-release/manual-bump",
    "@semantic-release/release-notes-generator"
  ]
}
```

## Configuration

### Environment variables

| Variable                         | Description                                                                |
|----------------------------------|----------------------------------------------------------------------------|
| `SEMANTIC_RELEASE_RELEASE_TYPE`  | **Required.** The type of release to apply (`major`, `minor` or `patch`).  |
