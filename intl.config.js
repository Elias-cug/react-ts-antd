const path = require('path');
module.exports = ({ vscode, utils }) => {
  return {
    localeDir: path.join(__dirname, 'src/locales'),
    langKey: {
      zh_CN: '中文'
    }
  };
};
