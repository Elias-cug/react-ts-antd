module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  }
};
