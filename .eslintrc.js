module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    // 开启实验属性
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      // 修饰器
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  globals: {
    __DEV__: false,
    __dirname: false,
    window: true,
    define: true,
    history: true,
    location: true,
    wxjs: true,
    $: true,
    WeixinJSBridge: true,
    wx: true,
    process: true,
    qq: true
  },
  settings: {
    react: {
      version: '16.2.0'
    }
  },

  /**
   * 'off' 或 0 - 关闭规则
   * 'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * 'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'import/no-anonymous-default-export': 'off'
  }
}
