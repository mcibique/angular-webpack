module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: ['eslint:all', 'angular'],
  env: {
    browser: true,
    jasmine: true,
    es6: true,
    commonjs: true
  },
  globals: {
    angular: true
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'quote-props': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'dot-location': ['error', 'property'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    'object-curly-spacing': ['error', 'always'],

    'object-curly-newline': 'off',
    'sort-imports': 'off',
    'sort-vars': 'off',
    'sort-keys': 'off',
    'func-names': 'off',
    'prefer-const': 'off',
    'require-jsdoc': 'off',
    'padded-blocks': 'off',
    'init-declarations': 'off',
    'newline-after-var': 'off',
    'prefer-arrow-callback': 'off',
    'no-magic-numbers': 'off',

    'angular/no-service-method': 'off'
  }
};
