module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  extends: ['eslint:recommended'],
};
