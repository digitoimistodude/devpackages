module.exports = {
  ignorePatterns: ['content/themes/THEMENAME/js/dist/*.js', 'content/themes/THEMENAME/node_modules/**/*.js', 'temp.js', 'content/themes/THEMENAME/js/src/front-end.js', '**/gulp/**/*.js', '**/gulp/*.js', 'gulpfile.js'],
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb/base',
  rules: {
    indent: ['error', 2],
  },
  env: {
    browser: true,
    jquery: true,
  },
};
