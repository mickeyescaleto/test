const { configs } = require('@eslint/js');
const prettier = require('eslint-plugin-prettier/recommended');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const react = require('eslint-plugin-react');
const globals = require('globals');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...configs.recommended,
  ...prettierRecommended,
  plugins: {
    prettier,
    react,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'arrow-body-style': 'off',
  },
  ignores: [
    '.turbo',
    'node_modules/',
    'dist/',
    'eslint.config.js',
    'postcss.config.js',
    'tailwind.config.js',
  ],
};
