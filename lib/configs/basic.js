module.exports = {

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        printWidth: 100,
        trailingComma: 'all',
        endOfLine: 'auto',
        bracketSpacing: true
      }
    ]
  }
}