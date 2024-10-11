const config = require('./react');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...config,
  ignores: [...config.ignores, '.next', 'next.config.mjs'],
};
