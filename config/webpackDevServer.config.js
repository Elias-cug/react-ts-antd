const paths = require('./paths');
module.exports = {
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    progress: true,
  },
  proxy: {
    '/mock': {
      target: 'http://127.0.0.1:3250',
      logLevel: 'silent',
      secure: false,
      changeOrigin: true,
      ws: true,
      xfwd: true,
    },
  },
  historyApiFallback: true,
  onBeforeSetupMiddleware: function (devServer) {
    if (!devServer) {
      throw new Error('webpack-dev-server is not defined');
    }

    devServer.app.get('/some/path', function (req, res) {
      res.json({ custom: 'response' });
    });
  },
};
