const config = require('@mospolyworks/eslint-config/elysia');
const typescript = require('@mospolyworks/eslint-config/typescript');

/** @type {import("eslint").Linter.Config} */
module.exports = typescript(__dirname, config, {
  ignores: [...config.ignores],
});
