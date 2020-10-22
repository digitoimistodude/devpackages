// Hide deprecation warnings
process.env.NODE_PENDING_DEPRECATION = 0;

// Dependencies
const {
  dest,
  src,
} = require('gulp');
const webpack = require('webpack-stream');
const named = require('vinyl-named');
const eslint = require('gulp-eslint');
const config = require('../config');
const {
  handleError,
} = require('../helpers/handle-errors.js');
const webpackConfig = require('../webpack.config.js');

// Task
function js() {
  return src(config.js.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .on('error', handleError())
    .pipe(dest(config.js.dest));
}

exports.js = js;
