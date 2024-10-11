const config = require('./library');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...config,
  ignores: [...config.ignores],
};
