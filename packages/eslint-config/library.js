const { configs } = require('@eslint/js');
const prettier = require('eslint-plugin-prettier/recommended');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: {
    prettier,
  },
  ...configs.recommended,
  ...prettierRecommended,
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.node,
    },
  },

  ignores: ['.turbo', 'node_modules/', 'dist/', 'eslint.config.js'],
};
