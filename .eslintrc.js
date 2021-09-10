module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prefer-const': 'off',
    'no-var-requires': 'off',
    'ban-types': 'off'
  }
};
